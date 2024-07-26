"use client";

import { ChangeEvent, useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Loader } from "lucide-react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { useRouter } from "next/navigation";


export const CreateUrl = () => {

  const { user } = useKindeBrowserClient()

  const [longURL, setLongURL] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const router = useRouter()

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    if (!user) {
      router.push("/api/auth/login")
      return
    }

    try {
      const res = await fetch("api/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ longURL: longURL.trim() })
      })

      if (!res.ok) {
        throw new Error("Somthing went wrong")
      }

      const data = await res.json()

      if (data.message === "Success") {
        router.push("/dashboard")
      }

    } catch (error) {
      console.log("Error", error)
    } finally {
      setIsLoading(false)
      setLongURL("")
    }

  }

  return (
    <form onSubmit={handleSubmit}
      className="relative h-14 w-96 flex flex-col rounded-lg md:w-2/4 gap-2 shadow-[0px_0px_20px_4px_#facc1520,_0px_5px_30px_#a465db]"
    >
      <Input
        className="h-full flex-1 py-4 px-4 border-0 dark:border-2 font-semibold focus-visible:ring-primary"
        type="url"
        placeholder="Enter your looooong URL"
        value={longURL}
        onChange={(e) => setLongURL(e.target.value)}
      />
      <Button type="submit" variant="default"
        className="absolute right-0 h-full font-bold"
        disabled={!longURL || isLoading}
      >
        {isLoading ? <Loader className="animate-spin" /> : "Shorten !!"}
      </Button>
    </form>
  )
}
