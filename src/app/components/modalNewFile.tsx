import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { HoverInfo } from './hoverInfo'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod";
import Modal from './modal'
import { IoMdClose } from 'react-icons/io'
import { Separator } from '@/components/ui/separator'

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required." }),
  lastName: z.string().min(1, { message: "Last name is required." }),
  email: z.string().email({ message: "Email is invalid." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z.string().min(8, { message: "Confirm password is required." }),
  gender: z.string().optional(),
  phoneNumber: z.string().optional(),
});

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function ModalNewFile({
  isOpen,
  onClose
}: ModalProps) {

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: any) {
    console.log(values);
  }

  // async function onSubmit(formData: FormData) {
  //   'use server';

  //   const name = formData.get('name')
  //   const email = formData.get('email')

  //   console.log(name, email)
  // }

  return (
    <main>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            Novo documentos
          </Button>
        </DialogTrigger>

        <DialogContent className='min-w-80'>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>


          <Card className="container w-4/5 h-4/5 flex">
            <div className="w-3/6 flex justify-center items-center p-4 bg-gray-800">
              <Button>Novo Certificado</Button>
            </div>
            <Form {...form}>
              <form className="space-y-8 w-3/6 flex flex-col justify-center items-center p-12 bg-gray-700">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex'>
                        Seu nome
                        <HoverInfo />
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="activityName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex'>
                        Nome da atividade
                        <HoverInfo />
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nome da atividade" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="workLoad"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex'>
                        Tempo de trabalho
                        <HoverInfo />
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Tempo de trabalho" type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="days"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex'>
                        Dias
                        <HoverInfo />
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Dias" type="string" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="hours"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex'>
                        Horas
                        <HoverInfo />
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Horas" type="number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex'>
                        Data
                        <HoverInfo />
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Data" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="issuingOrganization"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex'>
                        Nome da organização
                        <HoverInfo />
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Nome da organização" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="assessment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className='flex'>
                        Avaliação/Nota
                        <HoverInfo />
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Avaliação/Nota" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-end">
                  <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
                    Register
                  </Button>
                </div>
              </form>
            </Form>
          </Card>
        </DialogContent>
      </Dialog>
    </main>
  )
}
