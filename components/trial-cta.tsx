"use client"

import Link from "next/link"
import { forwardRef, useEffect, useState, type AnchorHTMLAttributes, type ReactNode } from "react"
import { forwardUtmParams } from "@/lib/forward-utm"

const APP_BASE_URL = "https://app.easyshifthq.com"

type TrialCTAProps = {
  children: ReactNode
  className?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">

export const TrialCTA = forwardRef<HTMLAnchorElement, TrialCTAProps>(
  function TrialCTA({ children, className, ...rest }, ref) {
    const [href, setHref] = useState<string>(APP_BASE_URL)

    useEffect(() => {
      setHref(forwardUtmParams(APP_BASE_URL))
    }, [])

    return (
      <Link
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...rest}
      >
        {children}
      </Link>
    )
  }
)
