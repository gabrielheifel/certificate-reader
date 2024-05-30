'use client'

import { useState, useTransition } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { UploadFileSchema } from "@/schemas"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useCurrentUser } from "@/hooks/use-current-user"
import { Upload } from "lucide-react"
// import { toast } from "sonner"
import { uploadFile } from "@/actions/files"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@/components/ui/toast"
import Link from "next/link"

type UploadFileDialogProps = {
  children?: React.ReactNode
  className?: string
}

export default function UploadFileDialog({ children, className }: UploadFileDialogProps) {
  const [isPending, startTransiction] = useTransition()
  const [open, setOpen] = useState<boolean>(false)
  const user = useCurrentUser()

  const form = useForm<z.infer<typeof UploadFileSchema>>({
    resolver: zodResolver(UploadFileSchema),
    defaultValues: {
      title: "",
      file: undefined
    }
  })

  const onSubmit = async (formData: FormData) => {
    console.log(formData)

    if (!user?.registration) {
      return (
        toast({
          description: "Não é possível fazer upload, por favor informe sua matrícula em settings.",
          action:
            <ToastAction altText="Settings">
              <Link href="/app/settings">
                Settings
              </Link>
            </ToastAction>,
        })
      )
    }

    startTransiction(async () => {
      const response = await uploadFile(formData, user);
      if (response.success) {
        toast({
          variant: "success",
          description: response.success,
        })
        setOpen(false)
      } else {
        toast({
          description: response.error,
          action:
            <ToastAction altText="Settings">
              <Link href="/app/settings">
                Settings
              </Link>
            </ToastAction>,
        })
      }
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* {children} */}
        <Button size="sm" className="h-7 gap-1">
          <Upload className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Upload File
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-auto">
        <Form {...form}>
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <form action={onSubmit}>
            <DialogHeader>
              <DialogTitle className="mb-8">Upload File</DialogTitle>
              <DialogDescription className="space-y-8">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="file"
                  render={() => (
                    <FormItem>
                      <FormLabel>File</FormLabel>
                      <FormControl>
                        <Input
                          className="cursor-pointer"
                          type="file"
                          {...form.register('file')}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isPending}>
                  {isPending ? 'Enviando...' : 'Submit'}
                </Button>
              </DialogDescription>
            </DialogHeader>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
