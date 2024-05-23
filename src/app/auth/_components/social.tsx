"use client"

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { FaGithub, FaGoogle } from "react-icons/fa";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    })
  }

  return (
    <div className="p-6 pt-0">
      <Separator className="my-8" />
      <div className="space-y-4">
        <Button className="w-full" variant="outline" onClick={() => onClick("github")}>
          <FaGithub className="mr-2 h-4 w-4" />
          Login with GitHub
        </Button>
        <Button className="w-full" variant="outline" onClick={() => onClick("google")}>
          <FaGoogle className="mr-2 h-4 w-4" />
          Login with Google
        </Button>
      </div>
    </div>

  )
}