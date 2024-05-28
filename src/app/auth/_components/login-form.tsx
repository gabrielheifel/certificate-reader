'use client'

import { useState, useTransition } from "react"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "@/schemas"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { FormError } from "./form-error"
import { login } from "@/actions/login"
import { CardWrapper } from "./card-wrapper"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { toast } from "@/components/ui/use-toast"

export function LoginForm() {
  const searchParams = useSearchParams()
  const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
    ? "Email already in use with different provider!"
    : ""

  const [isPending, startTransiction] = useTransition()
  const [error, setError] = useState<string | undefined>("")

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const { handleSubmit, formState: { errors } } = form

  const handleSignIn = async (values: z.infer<typeof LoginSchema>) => {
    setError("")

    startTransiction(async () => {
      const response = await login(values);
      toast({
        variant: response.success ? "success" : "destructive",
        description: response.success ?? response.error,
      })
      setError(response?.error)
    })
  }

  return (
    <CardWrapper
      headerLabel="Welcome back"
      headerDescription="Enter your email and password to sign in."
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
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
                  <Button
                    size='sm'
                    variant='link'
                    asChild
                    className="px-0 font-normal underline text-gray-500 dark:text-gray-400">
                    <Link href="/auth/reset">
                      Forgot Password?
                    </Link>
                  </Button>
                </FormItem>
              )}
            >
            </FormField>
          </div>
          <FormError message={error || urlError} />
          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? 'Carregando...' : 'Sign In'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}