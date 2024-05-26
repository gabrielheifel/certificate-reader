/*
resend just send email to one person, the owner of account
to send email for more people, need to have a own domain
https://resend.com/domains
*/

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/auth/new-password?token=${token}`

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Reset your password",
    html: `<p> Click <a href="${resetLink}"> here </a> to reset password. </p>`
  })
}