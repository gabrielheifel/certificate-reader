export { GET, POST } from "@/auth"
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import EmailProvider from 'next-auth/providers/email'
import Credentials from "next-auth/providers/credentials"
// import { saltAndHashPassword } from "@/utils/password"

// export const authOptions = {
//   providers: [
//     EmailProvider({
//       server: process.env.EMAIL_SERVER, // Configurar o servidor SMTP
//       from: process.env.EMAIL_FROM, // Endereço de e-mail remetente
//     }),
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     // ... outros provedores (por exemplo, GitHub, Google, etc.)
//     // Credentials({
//     //   // You can specify which fields should be submitted, by adding keys to the `credentials` object.
//     //   // e.g. domain, username, password, 2FA token, etc.
//     //   credentials: {
//     //     email: {},
//     //     password: {},
//     //   },
//     //   authorize: async (credentials) => {
//     //     let user = null

//     //     // logic to salt and hash password
//     //     // const pwHash = saltAndHashPassword(credentials.password)

//     //     // logic to verify if user exists
//     //     user = await getUserFromDb(credentials.email, credentials.password)

//     //     if (!user) {
//     //       // No user found, so this is their first attempt to login
//     //       // meaning this is also the place you could do registration
//     //       throw new Error("User not found.")
//     //     }

//     //     // return user object with the their profile data
//     //     return user
//     //   },
//     // }),
//   ],
// };

// export default NextAuth(authOptions)
