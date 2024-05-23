"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Social } from "./social";
import { Header } from "./header";

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
    <Card className="mx-auto flex min-h-[100dvh] max-w-[500px] flex-col items-center justify-center px-4 py-12 border-none">
      <div className="w-full space-y-6">
        <Header label={headerLabel} description={headerDescription} />
        <CardContent className="pb-0">
          {children}
        </CardContent>
        {showSocial && <Social />}
        <CardFooter className="justify-between">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <Link className="text-sm underline" href={backButtonHref}>
              {backButtonLabel}
            </Link>
          </div>
          {/* <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <Link className="text-sm underline" href="#">
              Forgot Password?
            </Link>
          </div> */}
        </CardFooter>
      </div>
    </Card>
  )
}