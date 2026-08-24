"use client"

import { useRef, useState } from "react"
import { EMAIL } from "@/lib/content"

export function CopyAddress() {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable: the address is selectable text beside this button.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="au-label inline-flex min-h-[44px] items-center rounded-md border border-rule-on-ink px-4 text-on-ink-quiet transition-colors duration-100 hover:text-on-ink"
    >
      {copied ? "Copied" : "Copy address"}
      <span aria-live="polite" className="sr-only">
        {copied ? "Address copied to clipboard" : ""}
      </span>
    </button>
  )
}
