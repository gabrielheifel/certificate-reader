"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { FaGithub, FaGoogle } from "react-icons/fa";
import Link from "next/link";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  headerDescription: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  headerDescription,
  backButtonLabel,
  backButtonHref,
  showSocial
}: CardWrapperProps) => {
  return (
    <Card className="mx-auto flex min-h-[100dvh] max-w-[500px] flex-col items-center justify-center px-4 py-12 border-none">
      <div className="w-full space-y-6">
        <CardHeader className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">{headerLabel}</h1>
          <p className="text-gray-500 dark:text-gray-400">{headerDescription}</p>
        </CardHeader>
        <CardContent className="pb-0">
          {children}
        </CardContent>
        {showSocial && (
          <div className="p-6 pt-0">
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
          </div>
        )}
        <CardFooter className="justify-between">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <Link className="text-sm underline" href={backButtonHref}>
              {backButtonLabel}
            </Link>
          </div>
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <Link className="text-sm underline" href="#">
              Forgot Password?
            </Link>
          </div>
        </CardFooter>
      </div>
    </Card>
  )
}