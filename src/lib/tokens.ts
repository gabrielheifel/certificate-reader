import { v4 as uuidv4 } from "uuid"

import { db } from "@/lib/db"
import { getPasswordResetTokenByEmail } from "@/services/password-reset-token"

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidv4()
  const expires = new Date(new Date().getTime() + 5 * 60 * 1000) //5 min

  const existingToken = await getPasswordResetTokenByEmail(email)

  if (existingToken) {
    await db.passwordResetToken.delete({
      where: { id: existingToken.id }
    })
  }

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    }
  })

  return passwordResetToken
} 