import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import "dotenv/config";
import * as schema from './schema';

const { NEON_DB_URL } = process.env;
if (!NEON_DB_URL) {
  throw new Error("NEON_DB_URL is not defined");
}
export const sql = neon(NEON_DB_URL);
export const db = drizzle({ client: sql, schema });