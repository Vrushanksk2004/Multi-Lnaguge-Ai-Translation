import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { loginApi } from "@/features/auth/api/login"
import { loginSchema } from "@/features/auth/types"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = await loginSchema.parseAsync(credentials)
          const response = await loginApi({ email, password })

          if (response?.data?.token && response?.data?.user) {
            return {
              id: response.data.user.id,
              email: response.data.user.email,
              role: response.data.user.role,
              role_name: response.data.user.role,
              accessToken: response.data.token,
            }
          }
          return null
        } catch {
          // You could throw a custom error here if you want to handle specific API errors
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
        token.role_name = user.role_name
        token.accessToken = user.accessToken
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string
        session.user.role = token.role as string
        session.user.role_name = token.role_name as string
        session.accessToken = token.accessToken as string | undefined
      }
      return session
    },
  },
  // Ensure NextAuth uses a secret if set in .env
  secret: process.env.AUTH_SECRET || "default_secret_for_local_dev",
})
