import { LoginRequest, LoginResponse } from "../types"

export async function loginApi(data: LoginRequest): Promise<LoginResponse> {
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })

  const responseData = await response.json()

  if (!response.ok) {
    throw new Error(responseData.message || "Failed to login")
  }

  return responseData
}
