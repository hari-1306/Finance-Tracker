import { AppSidebar } from "@/components/App-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
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
