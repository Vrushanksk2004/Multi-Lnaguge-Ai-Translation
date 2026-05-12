import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "next/server": "next/server.js",
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest-setup.ts"],
    include: ["**/*.test.{ts,tsx}"],
    server: {
      deps: {
        inline: ["next-auth"],
      },
    },
  },
})
