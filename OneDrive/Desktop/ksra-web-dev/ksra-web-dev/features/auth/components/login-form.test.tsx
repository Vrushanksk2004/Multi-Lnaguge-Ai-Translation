import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { LoginForm } from "./login-form"
import { signIn } from "next-auth/react"
import { vi, describe, it, expect, Mock } from "vitest"

vi.mock("sonner", () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  },
}))

describe("LoginForm Component", () => {
  it("renders correctly", () => {
    render(<LoginForm />)
    expect(screen.getByText("Welcome back")).toBeInTheDocument()
    expect(screen.getByLabelText("Email")).toBeInTheDocument()
    expect(screen.getByLabelText("Password")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument()
  })

  it("toggles password visibility", async () => {
    render(<LoginForm />)
    const passwordInput = screen.getByLabelText("Password")
    const toggleButton = screen.getByRole("button", { name: /Show password/i })

    expect(passwordInput).toHaveAttribute("type", "password")

    await userEvent.click(toggleButton)
    expect(passwordInput).toHaveAttribute("type", "text")

    await userEvent.click(toggleButton)
    expect(passwordInput).toHaveAttribute("type", "password")
  })

  it("shows validation errors on empty submission", async () => {
    render(<LoginForm />)
    await userEvent.click(screen.getByRole("button", { name: "Login" }))

    await waitFor(() => {
      expect(screen.getByText("Invalid email address")).toBeInTheDocument()
      expect(screen.getByText("Password is required")).toBeInTheDocument()
    })
  })

  it("calls signIn with credentials upon successful validation", async () => {
    render(<LoginForm />)

    await userEvent.type(screen.getByLabelText("Email"), "test@example.com")
    await userEvent.type(screen.getByLabelText("Password"), "password123")

    global.fetch = vi.fn().mockResolvedValueOnce({
      json: async () => ({ accessToken: "fake-jwt", user: { id: "1" } }),
    })
    ;(signIn as Mock).mockResolvedValueOnce({ ok: true })

    await userEvent.click(screen.getByRole("button", { name: "Login" }))

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith("credentials", {
        email: "test@example.com",
        password: "password123",
        redirect: false,
      })
    })
  })
})
