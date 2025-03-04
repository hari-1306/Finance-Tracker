import { createAuthClient } from "better-auth/react"
import "dotenv/config";

const { BETTER_AUTH_URL } = process.env;
export const authClient = createAuthClient({
    baseURL: BETTER_AUTH_URL,
})

export const { signIn, signUp, useSession } = createAuthClient()