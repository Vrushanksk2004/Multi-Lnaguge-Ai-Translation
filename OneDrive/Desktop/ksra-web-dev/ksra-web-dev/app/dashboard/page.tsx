import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button"

export default async function DashboardPage() {
  const session = await auth()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background">
      <h1 className="text-4xl font-bold">Dashboard</h1>

      {session?.user && (
        <div className="mb-4 space-y-1 text-center">
          <p className="text-lg">
            Logged in as:{" "}
            <span className="font-semibold">{session.user.email}</span>
          </p>
          <p className="text-muted-foreground">
            Role:{" "}
            <span className="font-medium text-foreground capitalize">
              {session.user.role_name?.replace("_", " ")}
            </span>
          </p>
        </div>
      )}

      <form
        action={async () => {
          "use server"
          await signOut({ redirectTo: "/login" })
        }}
      >
        <Button variant="destructive" type="submit">
          Logout
        </Button>
      </form>
    </div>
  )
}
