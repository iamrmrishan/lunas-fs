import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import AuthButtonServer from "./auth-button-server"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        {/* @ts-expect-error Async Server Component */}
       <AuthButtonServer/>
      </div>
    </header>
  )
}
