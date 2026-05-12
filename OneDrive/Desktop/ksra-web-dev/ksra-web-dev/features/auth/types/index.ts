import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
})

export type LoginRequest = z.infer<typeof loginSchema>

export interface LoginResponse {
  success: boolean
  message: string
  data: {
    token: string
    user: {
      id: string
      email: string
      role: string
    }
  }
}

// NextAuth type declarations
import "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email?: string | null
      name?: string | null
      image?: string | null
      role: string
      role_name: string
    }
    accessToken?: string
  }

  interface User {
    id: string
    email?: string | null
    name?: string | null
    image?: string | null
    role: string
    role_name: string
    accessToken?: string
  }
}
