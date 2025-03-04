import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/drizzle/db";
import * as schema from "@/drizzle/schema";
import { nextCookies } from "better-auth/next-js";
 
export const auth = betterAuth({
    database: drizzleAdapter(db, {
        provider: "pg", 
        schema
    }),
    emailAndPassword: {
        enabled: true,
        minPasswordLength: 8,
    },
    session: {
        expiresIn: 60 * 60 * 24 * 7,
    },
    plugins: [nextCookies()]
});