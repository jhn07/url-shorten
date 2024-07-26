
import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";



export default async function Header() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  return (
    <header className="border-b py-4">
      <div className="container flex items-center gap-5">
        <h1 className="text-primary font-extrabold text-4xl">shorten</h1>
        <div className="flex flex-1 items-center justify-end gap-4">
          <ThemeToggle />
          {user && user.id ? (
            <>
              <Button asChild size="sm">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <LogoutLink>
                <Button variant="ghost">Log out</Button>
              </LogoutLink>
            </>
          ) : (
            <>
              <LoginLink>
                <Button size="sm">Login</Button>
              </LoginLink>
              <RegisterLink>
                <Button size="sm" variant="ghost">Sign In</Button>
              </RegisterLink>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
