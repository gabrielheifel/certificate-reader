// import { signInRequest } from "@/services/auth";
// import { createContext, useState } from "react";
// import Router from 'next/router';
// import { setCookie } from 'nookies';
// // const axios = require("axios");

// type User = {
//   name: string;
//   email: string;
//   avatar_url: string;
// }

// type SignInData = {
//   email: string;
//   password: string;
// }

// type AuthContextType = {
//   isAuthenticated: boolean;
//   user: User | null | undefined;
//   signIn: (data: SignInData) => Promise<void>
// }

// export const AuthContext = createContext({} as AuthContextType)

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState<User | null>()

//   const isAuthenticated = !!user;

//   async function signIn({ email, password }: SignInData) {

//     const { token, user } = await signInRequest({
//       email,
//       password,
//     })

//     setCookie(undefined, 'login.token', token, {
//       maxAge: 60 * 60 * 24 // 24 hours
//     })

//     setUser(user)

//     console.log('foi')

//     Router.push('../pages/Dashboard')

//     // axios para api
//     // try {
//     //   const response = await axios.get('/user?ID=12345');
//     //   console.log(response);

//     // trazer o avatar do github: 'https://github.com/{username}.png'

//     // } catch (error) {
//     //   console.error(error);
//     // }
//   }

//   return (
//     <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }