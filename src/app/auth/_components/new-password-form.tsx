'use client'

import { useState, useTransition } from "react"
import { useSearchParams } from "next/navigation"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { NewPasswordSchema } from "@/schemas"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { FormError } from "./form-error"
import { CardWrapper } from "./card-wrapper"
import { toast } from "@/components/ui/use-toast"
import { newPassword } from "@/actions/new-password"

export function NewPasswordForm() {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const [isPending, startTransiction] = useTransition()
  const [error, setError] = useState<string | undefined>("")

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: "",
    }
  });

  const { handleSubmit } = form

  const handleSignIn = async (values: z.infer<typeof NewPasswordSchema>) => {
    setError("")

    startTransiction(async () => {
      await newPassword(values, token)
        .then((data) => {
          if (data?.success) {
            toast({
              variant: "success",
              title: data?.success,
            })
          } else {
            toast({
              variant: "destructive",
              title: "Login failed",
              description: data?.error
            })
            setError(data?.error)
          }
        })

    })
  }

  return (
    <CardWrapper
      headerLabel="Reset password"
      headerDescription="Enter a new password"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <Form {...form}>
        <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="password"
                      placeholder="m@inf.ufpel.edu.br"
                      required
                      {...form.register('password')}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            >
            </FormField>
          </div>
          <FormError message={error} />
          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? 'Carregando...' : 'Reset password'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}