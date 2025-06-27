import { handlers } from "@/auth"
export const { GET, POST } = handlers
export { auth as middleware } from "@/auth"
export const runtime = "edge"

