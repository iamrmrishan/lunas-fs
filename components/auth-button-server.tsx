import { cookies } from "next/headers"
import { createServerClient, type CookieOptions } from '@supabase/ssr'

import AuthButtonClient from "./auth-button-client"

export default async function AuthButtonServer() {
  const cookieStore = cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
      },
    }
  )
  const {
    data: { session },
  } = await supabase.auth.getSession()
  return <AuthButtonClient session={session} />
}
