"use client";

import { authClient } from "@/lib/auth-client";
import { LogOut } from "lucide-react";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export default function SignOut() {
  return (
    <DropdownMenuItem
      onClick={async () =>
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              toast.success("Signed out successfully");
              redirect("/login");
            },
          },
        })
      }
    >
      <span className="flex gap-2">
        <LogOut />
        Sign out
      </span>
    </DropdownMenuItem>
  );
}
