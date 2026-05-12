import { describe, it, expect, vi, Mock } from "vitest"
import { loginApi } from "./login"

// Mock global fetch
global.fetch = vi.fn()

process.env.NEXT_PUBLIC_API_BASE_URL = "https://cobackend-1.onrender.com/api/v1"

describe("loginApi", () => {
  it("should successfully log in and return data", async () => {
    const mockResponse = {
      success: true,
      message: "Login successful",
      data: {
        token: "fake-jwt-token",
        user: {
          id: "5748945e-b8b0-4047-afd7-a7b3764f175e",
          email: "test@example.com",
          role: "super_admin",
        },
      },
    }
    ;(global.fetch as Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse,
    })

    const data = await loginApi({
      email: "test@example.com",
      password: "password123",
    })

    expect(global.fetch).toHaveBeenCalledWith(
      "https://cobackend-1.onrender.com/api/v1/auth/login",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({
          email: "test@example.com",
          password: "password123",
        }),
      })
    )
    expect(data).toEqual(mockResponse)
  })

  it("should throw an error if the response is not ok", async () => {
    ;(global.fetch as Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: "Invalid email or password" }),
    })

    await expect(
      loginApi({ email: "test@example.com", password: "wrong" })
    ).rejects.toThrow("Invalid email or password")
  })
})
