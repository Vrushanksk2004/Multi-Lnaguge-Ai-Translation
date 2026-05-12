"use client"

import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { TooltipProvider } from "@/components/ui/tooltip"

export interface AppSidebarProps {
  navigationConfig: {
    label: string
    href: string
    icon: React.ReactNode
    items?: { title: string; url: string }[]
  }[]
  headerTitle: string
  userProfile: {
    name: string
    role: string
    email: string
    avatar?: string
  }
  children?: React.ReactNode
}

export function AppSidebar({
  navigationConfig,
  headerTitle,
  userProfile,
  children,
}: AppSidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

  // Map navigationConfig to NavMain items
  const navItems = React.useMemo(
    () =>
      navigationConfig.map((item) => ({
        title: item.label,
        url: item.href,
        icon: item.icon,
        items: item.items,
      })),
    [navigationConfig]
  )

  return (
    <TooltipProvider>
      <SidebarProvider
        open={!isCollapsed}
        onOpenChange={(open) => setIsCollapsed(!open)}
        openMobile={isMobileOpen}
        onOpenMobileChange={setIsMobileOpen}
      >
        <Sidebar collapsible="icon">
          <SidebarHeader className="p-0">
            <div className="flex h-14 w-full items-center px-3 transition-all duration-200 ease-linear group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
              {/* Logo */}
              <div className="ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <span className="text-lg leading-none font-bold">K</span>
              </div>

              {/* Title */}
              <div className="ml-2 grid flex-1 overflow-hidden text-left text-sm leading-tight transition-all duration-200 ease-linear group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:opacity-0">
                <span className="truncate font-semibold">{headerTitle}</span>

                <span className="truncate text-xs text-muted-foreground">
                  KSRA Portal
                </span>
              </div>
            </div>
          </SidebarHeader>

          <SidebarContent>
            <NavMain items={navItems} />
          </SidebarContent>

          <SidebarFooter>
            <NavUser
              user={{
                name: userProfile.name,
                email: userProfile.email,
                avatar: userProfile.avatar || "",
                role: userProfile.role,
              }}
            />
          </SidebarFooter>

          <SidebarRail />
        </Sidebar>

        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center border-b px-4 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            {/* Left section */}
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />

              {/* Fixed centered separator */}
              <div className="flex h-full items-center">
                <Separator orientation="vertical" className="h-5" />
              </div>

              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/dashboard">
                      {headerTitle}
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator className="hidden md:block" />

                  <BreadcrumbItem>
                    <BreadcrumbPage>Dashboard</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}
