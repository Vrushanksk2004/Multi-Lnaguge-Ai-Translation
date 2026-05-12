"use client"

import * as React from "react"
import { AppSidebar } from "@/components/AppSidebar"
import {
  LayoutDashboardIcon,
  UsersIcon,
  TrophyIcon,
  SettingsIcon,
  CalendarIcon,
  BellIcon,
  ShieldCheckIcon,
} from "lucide-react"

export default function SidebarDevPage() {
  const navigation = React.useMemo(
    () => [
      {
        label: "Dashboard",
        href: "#",
        icon: <LayoutDashboardIcon />,
      },
      {
        label: "Player Management",
        href: "#",
        icon: <UsersIcon />,
        items: [
          { title: "All Players", url: "#" },
          { title: "Registration Queue", url: "#" },
          { title: "Verification", url: "#" },
        ],
      },
      {
        label: "Competitions",
        href: "#",
        icon: <TrophyIcon />,
        items: [
          { title: "Live Matches", url: "#" },
          { title: "Upcoming Events", url: "#" },
          { title: "Archive", url: "#" },
        ],
      },
      {
        label: "Calendar",
        href: "#",
        icon: <CalendarIcon />,
      },
      {
        label: "Notifications",
        href: "#",
        icon: <BellIcon />,
      },
      {
        label: "Admin Controls",
        href: "#",
        icon: <ShieldCheckIcon />,
        items: [
          { title: "User Roles", url: "#" },
          { title: "System Logs", url: "#" },
        ],
      },
      {
        label: "Settings",
        href: "#",
        icon: <SettingsIcon />,
      },
    ],
    []
  )

  const userProfile = React.useMemo(
    () => ({
      name: "Dev User",
      role: "System Administrator",
      email: "dev@ksra.com",
      avatar: "https://github.com/shadcn.png",
    }),
    []
  )

  return (
    <AppSidebar
      navigationConfig={navigation}
      headerTitle="KSRA Dev Portal"
      userProfile={userProfile}
    ></AppSidebar>
  )
}
