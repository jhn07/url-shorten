"use client";

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { CopyCheckIcon } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react";

type ItemViewProps = {
  label: string
  url: string
  hrefUrl?: string
}

export const ItemView = ({ label, url, hrefUrl }: ItemViewProps) => {

  const [isCopied, setIsCopied] = useState<boolean>(false)

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false)
      }, 2000)

      return () => clearTimeout(timeout)
    }
  }, [isCopied])

  const handleCopy = async () => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL!
    const fullURL = hrefUrl ? `${baseURL}${hrefUrl}` : url
    await navigator.clipboard.writeText(fullURL)
    setIsCopied(true)
  }

  return (
    <div className="group flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <Label>{label}</Label>
        <Button size="icon" variant="ghost"
          className={cn(
            "h-5 w-5 hover:bg-primary/20 opacity-0 transition-all duration-300 group-hover:opacity-100",
            isCopied && "bg-green-300 hover:bg-green-300"
          )}
          onClick={handleCopy}
        >
          <CopyCheckIcon className="h-4 w-4" />
        </Button>
      </div>
      <Link href={hrefUrl || url} target="_blank" prefetch={false} className="text-[13.5px] text-balance line-clamp-2 hover:underline">
        {url}
      </Link>
    </div>
  )
}