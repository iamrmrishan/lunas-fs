"use client"

import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Provider } from "@supabase/supabase-js"

import { Icons } from "./icons"
import { Button } from "./ui/button"

export default function AuthButton() {
  const supabase = createClientComponentClient()
  const [authProvider, setAuthProvider] = useState<Provider>("github")

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: authProvider,
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    })
  }
  return (
    <div className="grid grid-cols-3 gap-6">
      <Button variant="outline">
        <Icons.facebook className="mr-2 h-4 w-4" />
        Facebook
      </Button>
      <Button variant="outline">
        <Icons.google className="mr-2 h-4 w-4" />
        Google
      </Button>
      <Button
        onClick={() => {
          setAuthProvider("github")
          handleSignIn()
        }}
        variant="outline"
      >
        <Icons.gitHub className="mr-2 h-4 w-4" />
        Github
      </Button>
    </div>
  )
}
