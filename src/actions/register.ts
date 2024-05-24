"use server"

import * as z from "zod"
import bcrypt from "bcrypt"
import { RegisterSchema } from "@/app/schemas"
import { db } from "@/lib/db"
import { api } from "@/lib/axios"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: "Invalid fields!" }
  }

  const { email, password, name, registration, isAdmin } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)
  const registrationNumber = parseInt(registration)

  try {
    await api.post('/users', {
      email: email,
      password: hashedPassword,
      registration: registrationNumber
    })
  } catch (error) {
    console.log(error)
  }

  const existingEmail = await getUserByEmail(email)

  if (existingEmail) return { error: "Email already in use!" }

  await db.user.create({
    data: { email, password: hashedPassword, name, registration: registrationNumber }
  })

  return { success: "User Created!" }
}