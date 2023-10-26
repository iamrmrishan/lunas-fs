import Link from "next/link"
import { Icons } from "@/components/icons"

export default function SiteFooter() {
  return (
    <footer>
      <div className="container flex flex-wrap items-center justify-center px-4 py-8 mx-auto  lg:justify-between">
        <div className="flex flex-wrap justify-center text-muted-foreground">
          <ul className="flex items-center space-x-4">
            <li><Link href={"/about"}>About</Link></li>
            <li><Link href={"/contact"}>Contact US</Link></li>
            <li><Link href={"/terms"}>Terms & Condition</Link></li>
          </ul>
        </div>
        <div className="flex justify-center space-x-4 mt-4 lg:mt-0">
          <Link href={""}>
            <Icons.facebook />
          </Link>
          <Link href={""}>
            <Icons.twitter />
          </Link>
          <Link href={""}>
            <Icons.instagram />
          </Link>
          <Link href={""}>
            <Icons.x />
          </Link>
        </div>
      </div>
      <div className="pb-2">
        <p className="text-center text-muted-foreground">
          @2024 All rights reserved.
        </p>
      </div>
    </footer>
  )
}