'use client'

import * as z from "zod"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "@/app/schemas"
import { signIn } from "@/services/auth"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { FormError } from "./form-error"
import { login } from "@/actions/login"

export function AuthForm() {

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const { handleSubmit, register, formState: { errors } } = form

  const handleErrorMessage = () => {
    if (errors.email || errors.password) return "Invalid credentials!"
  }

  const handleSignIn = async (values: z.infer<typeof LoginSchema>) => {

    login(values)

    // await signIn("google")
    // await signIn("email", { email: values.email })

  }

  return (
    <div className="mx-auto flex min-h-[100dvh] max-w-[500px] flex-col items-center justify-center px-4 py-12">
      <div className="w-full space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your email and password to sign in.</p>
        </div>
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
                        type="email"
                        placeholder="m@inf.ufpel.edu.br"
                        required
                        {...register('email')}
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="password"
                        placeholder="******"
                        required
                        {...register('password')}
                      />
                    </FormControl>
                  </FormItem>
                )}
              >
              </FormField>
            </div>
            <FormError message={handleErrorMessage()} />
            <Button className="w-full" type="submit">
              Sign in
            </Button>
            <div className="text-center text-sm text-gray-500 dark:text-gray-400 flex justify-between">
              <Link className="text-sm underline" href="#">
                Dont have an account?
              </Link>
              <Link className="text-sm underline" href="#">
                Forgot Password?
              </Link>
            </div>
            <Separator className="my-8" />
            <div className="space-y-4">
              <Button className="w-full" variant="outline">
                <FaGithub className="mr-2 h-4 w-4" />
                Login with GitHub
              </Button>
              <Button className="w-full" variant="outline">
                <FaGoogle className="mr-2 h-4 w-4" />
                Login with Google
              </Button>
            </div>
          </form>

        </Form>
      </div>
    </div>
  )
}