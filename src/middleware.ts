import NextAuth from "next-auth"

import authConfig from "./auth.config"
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  apiPrefix,
  authRouts,
  publicRoutes
} from "@/routes"
import { NextResponse } from "next/server"

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isApiRoute = nextUrl.pathname.startsWith(apiPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRouts.includes(nextUrl.pathname)

  if (isApiRoute) {
    return NextResponse.next();
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
    }
    return NextResponse.next();
  }

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/auth/login", nextUrl))
  }


  return NextResponse.next();
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}