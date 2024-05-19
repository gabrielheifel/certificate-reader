"use server"

import axios from "axios"
import * as z from "zod"
import bcrypt from "bcrypt"
import { RegisterSchema } from "@/app/schemas";
import { db } from "@/lib/db";


export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } })
    return user
  } catch {
    return null
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } })
    return user
  } catch {
    return null
  }
}


export const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/user"
})

export const UserService = {

  async listUsers() {
    try {
      const response = await axios.get('/user');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },

  async createUser(values: z.infer<typeof RegisterSchema>) {

    const validatedFields = RegisterSchema.safeParse(values)

    if (!validatedFields.success) {
      return { error: "Invalid fields!" }
    }

    const hashedPassword = await bcrypt.hash(values.password, 10)
    const user = { ...values, password: hashedPassword }

    try {
      const response = await axios.post('/user', user)
      return response
    } catch (error) {
      console.log(error)
    }
  }
}
