"use server"

import { LoginSchema } from "@/app/schemas"
import * as z from "zod"

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: "Invalid fields!" }
  }

  return { success: "SigIn success!" }
}