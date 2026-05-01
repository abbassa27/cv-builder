import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "https://cv-builder-one-flame.vercel.app"
      : "http://localhost:3000",
})