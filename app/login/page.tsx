import { LoginForm } from "@/components/LoginForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function Loginpage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session);
  if (session?.user) redirect("/dashboard");
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <LoginForm />
      </div>
    </div>
  );
}
