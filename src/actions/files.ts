"use server"

import * as z from "zod"
import { signIn } from "@/auth"
import { UploadFileSchema } from "@/schemas"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { AuthError } from "next-auth"

export const files = async (values: z.infer<typeof UploadFileSchema>) => {
  const validatedFields = UploadFileSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: "Invalid fields!" }
  }

  const { title, file } = validatedFields.data;

  if (!values?.file) { return { error: "No file selected" } }

  const bytes = await values?.file?.arrayBuffer()
  const buffer = Buffer.from(bytes)

  console.log(file)

  return { success: "feito" }
}