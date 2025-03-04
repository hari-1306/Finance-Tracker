import { AppSidebar } from "@/components/App-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { session } from "@/server";
import { getSessionCookie } from "better-auth";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  // const sessionCookie = getSessionCookie(Request);
  const session = await auth.api.getSession({
    headers: await headers(),
  });
console.log(session)
if (!session?.user) redirect("/login");
  return (
    <>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar>
          <main className="grow px-2">
            <div className="w-full py-2">
              <SidebarTrigger />
            </div>
            {children}
          </main>
        </AppSidebar>
      </SidebarProvider>
    </>
  );
}
