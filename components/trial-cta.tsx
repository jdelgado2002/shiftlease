"use client"

import Link from "next/link"
import {
  forwardRef,
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react"
import posthog from "posthog-js"
import { ctaPlacement, pageDepthPct } from "@/lib/analytics"
import { forwardUtmParams } from "@/lib/forward-utm"

const APP_BASE_URL = "https://app.easyshifthq.com"

type TrialCTAProps = {
  children: ReactNode
  className?: string
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">

export const TrialCTA = forwardRef<HTMLAnchorElement, TrialCTAProps>(
  function TrialCTA({ children, className, onClick, ...rest }, ref) {
    const [href, setHref] = useState<string>(APP_BASE_URL)

    useEffect(() => {
      setHref(forwardUtmParams(APP_BASE_URL))
    }, [])

    function handleClick(event: MouseEvent<HTMLAnchorElement>) {
      const el = event.currentTarget
      try {
        posthog.capture("trial_cta_clicked", {
          cta_text: el.textContent?.trim() ?? "",
          cta_placement: ctaPlacement(el),
          page_depth_pct: pageDepthPct(
            el.getBoundingClientRect().top,
            window.scrollY,
            document.documentElement.scrollHeight
          ),
        })
      } catch {
        // PostHog not initialized — never block navigation
      }
      onClick?.(event)
    }

    return (
      <Link
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={handleClick}
        {...rest}
      >
        {children}
      </Link>
    )
  }
)
