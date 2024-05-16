'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useForm } from "react-hook-form"

export function AuthForm() {

  const { register, handleSubmit } = useForm();

  const handleSignIn = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div className="mx-auto flex min-h-[100dvh] max-w-[500px] flex-col items-center justify-center px-4 py-12">
      <div className="w-full space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome back</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your email and password to sign in.</p>
        </div>
        <form className="space-y-4" onSubmit={handleSignIn}>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" placeholder="m@example.com" required type="email" {...register('email')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" required type="password" {...register('password')} />
          </div>
          <Button className="w-full" type="submit">
            Sign in
          </Button>
        </form>
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          Dont have an account? {' '}
          <Link className="font-medium underline underline-offset-4" href="#">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}