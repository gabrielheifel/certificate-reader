"use server"

import axios from "axios"
import * as z from "zod"
import bcrypt from "bcryptjs"
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";


export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } })
    return user
  } catch {
    return null
  }
}

export const getUserByRegistration = async (registration: number) => {
  try {
    const user = await db.user.findUnique({ where: { registration } })
    return user
  } catch (error) {
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


const axiosInstance = axios.create({
  baseURL: "http://localhost:8080"
})

export const listUsers = async () => {
  try {
    const response = await axiosInstance.get('/user');
    const data = response.data
    console.log({ axios: data });
  } catch (error) {
    console.error({ error: error });
  }
}

export const findUserByEmail = async (email: string) => {
  console.log("entrou", email)
  try {
    const response = await axiosInstance.post('/findEmail', { email: email });
    const data = response.data
    console.log({ axios: data });
  } catch (error) {
    console.error({ error: error });
  }
}

export const findUserByCertification = async (registration: string) => {
  console.log("entrou", registration)
  try {
    const response = await axiosInstance.post('/registration', { registration: registration });
    const data = response.data
    console.log({ axios: data });
  } catch (error) {
    console.error({ error: error });
  }
}

export const createUser = async (values: z.infer<typeof RegisterSchema>) => {

  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: "Invalid fields!" }
  }

  const hashedPassword = await bcrypt.hash(values.password, 10)
  const user = { ...values, password: hashedPassword }

  try {
    const response = await axiosInstance.post('/user', user)
    return response
  } catch (error) {
    console.log(error)
  }

}
