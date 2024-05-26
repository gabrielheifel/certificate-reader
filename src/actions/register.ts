"use server"

import * as z from "zod"
import bcrypt from "bcrypt"
import { RegisterSchema } from "@/schemas"
import { db } from "@/lib/db"
import { getUserByEmail, getUserByRegistration } from "@/services/user"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: "Invalid fields!" }
  }

  const { email, password, name, registration } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)
  const registrationNumber = parseInt(registration)

  const existingEmail = await getUserByEmail(email)
  const existingRegistration = await getUserByRegistration(registrationNumber)

  if (existingEmail) return { error: "Email already in use!" }
  if (existingRegistration) return { error: "Registration already in use!" }

  // await findUserByEmail(email)

  await db.user.create({
    data: { email, password: hashedPassword, name, registration: registrationNumber }
  })

  return { success: "User Created!" }
}