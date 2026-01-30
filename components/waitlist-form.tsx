"use client"

import { useState } from "react"
import { joinWaitlist } from "@/app/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function WaitlistForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(formData: FormData) {
    console.log("[v0] Form submitted, calling joinWaitlist...")
    setIsSubmitting(true)

    try {
      const result = await joinWaitlist(formData)
      console.log("[v0] joinWaitlist result:", result)

      if (result.success) {
        toast({
          title: "Success!",
          description: result.message,
          duration: 5000,
        })

        // Reset the form
        const form = document.getElementById("waitlist-form") as HTMLFormElement
        form?.reset()
      } else {
        toast({
          title: "Error",
          description: result.message,
          variant: "destructive",
          duration: 5000,
        })
      }
    } catch (error) {
      console.error("[v0] handleSubmit error:", error)
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form id="waitlist-form" action={handleSubmit} className="flex flex-col space-y-4">
      <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" name="email" required />
      <Input className="max-w-lg flex-1" placeholder="Company name" type="text" name="companyName" required />
      <Input
        className="max-w-lg flex-1"
        placeholder="Number of restaurant locations"
        type="number"
        name="locationCount"
        min="1"
        required
      />
      <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Get In Touch"}
      </Button>
    </form>
  )
}
