import "@testing-library/jest-dom/vitest"

import { cleanup } from "@testing-library/react"
import { afterEach, vi } from "vitest"

// Clean up DOM after each test
afterEach(() => {
  cleanup()
})

// Mock Next.js routing hooks globally
vi.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: vi.fn(),
      replace: vi.fn(),
      prefetch: vi.fn(),
      refresh: vi.fn(),
    }
  },
  usePathname() {
    return ""
  },
}))

// Mock NextAuth globally
vi.mock("next-auth/react", () => ({
  signIn: vi.fn(),
  signOut: vi.fn(),
  useSession: vi.fn(() => ({ data: null, status: "unauthenticated" })),
}))

vi.mock("@/auth", () => ({
  auth: vi.fn(),
  signIn: vi.fn(),
  signOut: vi.fn(),
}))

vi.mock("next/server", () => ({
  NextResponse: {
    next: vi.fn(),
    redirect: vi.fn(),
    json: vi.fn(),
  },
  NextRequest: vi.fn(),
}))
