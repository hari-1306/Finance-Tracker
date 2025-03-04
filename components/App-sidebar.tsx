import {
  BadgeDollarSign,
  Calendar,
  ChevronUp,
  Home,
  Inbox,
  Search,
  Settings,
  User2,
  CircleUserRound,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ModeToggle } from "./Theme-toggle";

// const header = [
//   {
//     title: "Finance Tracker",
//     icon: BadgeDollarSign,
//   },
// ];

// Menu items.
const items = [
  {
    title: "Overview",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Expenses",
    url: "/expenses",
    icon: Inbox,
  },
  {
    title: "Income",
    url: "/income",
    icon: Calendar,
  },
  {
    title: "Budgets",
    url: "/budgets",
    icon: Search,
  },
  {
    title: "Reports",
    url: "/reports",
    icon: Settings,
  },
];

export function AppSidebar({
  children,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar collapsible="icon" {...props} variant="inset">
        <SidebarHeader>
          {/* <SidebarGroup key={item.title}>
              <SidebarGroupLabel>
                <div className="w-full flex items-center justify-between">
                  <span className="flex gap-2 font-bold text-base">
                    <item.icon />
                    {item.title}
                  </span>
                  <ModeToggle />
                </div>
              </SidebarGroupLabel>
            </SidebarGroup> */}
          <SidebarMenu>
            <SidebarMenuItem>
              <div
                // size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground p-0 h-12 text-sm group-data-[collapsible=icon]:!p-0 peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md text-left outline-none ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0"
              >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <BadgeDollarSign />
                </div>
                <div className="grow flex items-center justify-between overflow-clip">
                  <span>Finance Tracker</span>
                  <ModeToggle />
                </div>
              </div>
              {/* <SidebarMenuButton
                size="lg"
                className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <BadgeDollarSign className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {"AAA"}
                  </span>
                  <span className="truncate text-xs">{"AAA"}</span>
                </div>
                <BadgeDollarSign className="ml-auto" />
              </SidebarMenuButton> */}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Username
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <span className="flex gap-2">
                      <CircleUserRound />
                      Account
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="flex gap-2">
                      <LogOut />
                      Sign out
                    </span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <main>{children}</main>
      </SidebarInset>
    </>
  );
}
