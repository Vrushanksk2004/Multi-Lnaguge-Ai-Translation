import { render, screen } from "@testing-library/react"
import DashboardPage from "./page"
import { auth } from "@/auth"
import { describe, it, expect, Mock } from "vitest"

describe("DashboardPage Component", () => {
  it("renders dashboard title and logout button", async () => {
    // auth is mocked to return undefined in vitest-setup
    const Page = await DashboardPage()
    render(Page)

    expect(screen.getByText("Dashboard")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Logout" })).toBeInTheDocument()
  })

  it("renders user information if session exists", async () => {
    ;(auth as Mock).mockResolvedValueOnce({
      user: { email: "admin@example.com", role_name: "super_admin" },
    })

    const Page = await DashboardPage()
    render(Page)

    expect(screen.getByText("admin@example.com")).toBeInTheDocument()
    expect(screen.getByText(/super admin/i)).toBeInTheDocument()
  })
})
