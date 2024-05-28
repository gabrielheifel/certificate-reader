'use client'

import { useState, useTransition } from "react"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ResetSchema } from "@/schemas"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { FormError } from "./form-error"
import { CardWrapper } from "./card-wrapper"
import { reset } from "@/actions/reset"
import { toast } from "@/components/ui/use-toast"

export function ResetForm() {
  const [isPending, startTransiction] = useTransition()
  const [error, setError] = useState<string | undefined>("")

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: "",
    }
  });

  const { handleSubmit, formState: { errors } } = form

  const handleSignIn = async (values: z.infer<typeof ResetSchema>) => {
    setError("")

    startTransiction(async () => {
      const response = await reset(values)
      toast({
        variant: response.success ? "success" : "destructive",
        description: response.success ?? response.error,
      })
      setError(response?.error)
    })
  }

  return (
    <CardWrapper
      headerLabel="Reset password"
      headerDescription="Forgot your login?"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
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
          </div>
          <FormError message={error} />
          <Button className="w-full" type="submit" disabled={isPending}>
            {isPending ? 'Sending...' : 'Send reset email'}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}