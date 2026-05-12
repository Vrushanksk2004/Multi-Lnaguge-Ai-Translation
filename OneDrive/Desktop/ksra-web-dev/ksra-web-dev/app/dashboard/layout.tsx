import { auth } from "@/auth"
import { AppSidebar } from "@/components/AppSidebar"
import {
  LayoutDashboardIcon,
  UsersIcon,
  TrophyIcon,
  SettingsIcon,
} from "lucide-react"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  const navigation = [
    { label: "Dashboard", href: "/dashboard", icon: <LayoutDashboardIcon /> },
    { label: "Players", href: "/dashboard/players", icon: <UsersIcon /> },
    {
      label: "Competitions",
      href: "/dashboard/competitions",
      icon: <TrophyIcon />,
    },
    { label: "Settings", href: "/dashboard/settings", icon: <SettingsIcon /> },
  ]

  const userProfile = {
    name: session?.user?.name || session?.user?.email?.split("@")[0] || "Guest",
    email: session?.user?.email || "guest@example.com",
    role: session?.user?.role_name?.replace("_", " ") || "Member",
    avatar: session?.user?.image || "",
  }

  return (
    <AppSidebar
      navigationConfig={navigation}
      headerTitle="KSRA Portal"
      userProfile={userProfile}
    >
      {children}
    </AppSidebar>
  )
}
