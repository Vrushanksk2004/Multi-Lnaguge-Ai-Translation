import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const isLoggedIn = !!req.auth
  const isAuthRoute = req.nextUrl.pathname.startsWith("/login")

  // Protect routes starting with /dashboard
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", req.nextUrl))
    }
  }

  // Redirect away from login page if already logged in
  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl))
  }

  return NextResponse.next()
})

// Match all routes except api, _next/static, _next/image, and favicon.ico
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
