"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Social } from "./social";
import { Header } from "./header";
import { ModeToggle } from "@/components/theme/mode-toggle";
import { Button } from "@/components/ui/button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  headerDescription?: string;
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
    <div>
      <div className="fixed m-4 right-0">
        <ModeToggle />
      </div>
      <Card className="mx-auto flex min-h-[100dvh] max-w-[500px] flex-col items-center justify-center px-4 py-12 border-none">
        <div className="w-full space-y-6">
          <Header label={headerLabel} description={headerDescription} />
          <CardContent className="pb-0">
            {children}
          </CardContent>
          {showSocial && <Social />}
          <CardFooter className="flex justify-center">
            <Button
              size='sm'
              variant='link'
              asChild
              className="font-normal underline text-gray-500 dark:text-gray-400">
              <Link href={backButtonHref}>
                {backButtonLabel}
              </Link>
            </Button>
            {/* <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <Link className="text-sm underline" href="#">
              Forgot Password?
            </Link>
          </div> */}
          </CardFooter>
        </div>
      </Card>
    </div>
  )
}