'use client'

import { useState, useTransition } from "react"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema } from "@/schemas"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { FormError } from "./form-error"
import { register } from "@/actions/register"
import { CardWrapper } from "./card-wrapper"
import { toast as toastSonner } from "sonner"
import { toast } from "@/components/ui/use-toast"
// import { UserService } from "@/services/database/UserService"

export function RegisterForm() {

  const [isPending, startTransiction] = useTransition()
  const [error, setError] = useState<string | undefined>("")

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      registration: "",
    }
  });

  const { handleSubmit, formState: { errors } } = form

  const handleCreate = async (values: z.infer<typeof RegisterSchema>) => {
    setError("")

    toastSonner.loading("Registering...")

    startTransiction(async () => {
      const response = await register(values)
      toast({
        variant: response.success ? "success" : "destructive",
        description: response.success ?? response.error,
      })
      setError(response?.error)
    })
  }

  // await signIn("google")
  // await signIn("email", { email: values.email })


  return (
    <CardWrapper
      headerLabel="Create an Account"
      headerDescription="Enter your credentials to create an account."
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form className="space-y-4" onSubmit={handleSubmit(handleCreate)}>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="email"
                      placeholder="m@inf.ufpel.edu.br"
                      required
                      {...form.register('email')}
                    />
                  </FormControl>
                  <FormMessage>
                    {errors.email && errors.email.message}
                  </FormMessage>
                </FormItem>
              )}
            >
            </FormField>
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="password"
                      placeholder="******"
                      required
                      {...form.register('password')}
                    />
                  </FormControl>
                </FormItem>
              )}
            >
            </FormField>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="string"
                      placeholder=""
                      required
                      {...form.register('name')}
                    />
                  </FormControl>
                </FormItem>
              )}
            >
            </FormField>
            <FormField
              control={form.control}
              name="registration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Matrícula</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="string"
                      placeholder=""
                      required
                      {...form.register('registration')}
                    />
                  </FormControl>
                  <FormMessage>
                    {errors.registration && errors.registration.message}
                  </FormMessage>
                </FormItem>
              )}
            >
            </FormField>
          </div>
          <FormError message={error} />
          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? 'Carregando...' : 'Cadastrar'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}