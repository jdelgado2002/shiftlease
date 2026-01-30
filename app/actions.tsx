"use server"

import { Resend } from "resend"

// Define the type for our form data
type WaitlistFormData = {
  email: string
  companyName: string
  locationCount: number
}

// Initialize Resend with our API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function joinWaitlist(formData: FormData): Promise<{ success: boolean; message: string }> {
  console.log("[v0] joinWaitlist called")
  console.log("[v0] RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY)
  console.log("[v0] SENDER_EMAIL_NOTIFICATIONS:", process.env.SENDER_EMAIL_NOTIFICATIONS)
  console.log("[v0] SENDER_EMAIL_WELCOME:", process.env.SENDER_EMAIL_WELCOME)
  console.log("[v0] ADMIN_EMAIL:", process.env.ADMIN_EMAIL)

  try {
    // Extract and validate form data
    const email = formData.get("email") as string
    const companyName = formData.get("companyName") as string
    const locationCount = Number.parseInt(formData.get("locationCount") as string, 10)

    console.log("[v0] Form data:", { email, companyName, locationCount })

    // Basic validation
    if (!email || !email.includes("@")) {
      return { success: false, message: "Please provide a valid email address." }
    }

    if (!companyName) {
      return { success: false, message: "Please provide your company name." }
    }

    if (isNaN(locationCount) || locationCount < 1) {
      return { success: false, message: "Please provide a valid number of locations." }
    }

    // Prepare data for emails
    const waitlistData: WaitlistFormData = {
      email,
      companyName,
      locationCount,
    }

    // Send notification email to admin
    console.log("[v0] Sending admin notification...")
    await sendAdminNotification(waitlistData)
    console.log("[v0] Admin notification sent")

    // Send confirmation email to user
    console.log("[v0] Sending user confirmation...")
    await sendUserConfirmation(email, companyName)
    console.log("[v0] User confirmation sent")

    // Return success message
    return {
      success: true,
      message: "Thank you for your interest! We'll be in touch soon.",
    }
  } catch (error) {
    console.error("[v0] Error joining waitlist:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}

async function sendAdminNotification(data: WaitlistFormData) {
  const from = process.env.SENDER_EMAIL_NOTIFICATIONS as string
  const to = process.env.ADMIN_EMAIL as string

  console.log("[v0] sendAdminNotification - from:", from, "to:", to)

  if (!from || !to) {
    throw new Error("Missing email configuration for admin notification")
  }

  const result = await resend.emails.send({
    from,
    to,
    subject: "New EasyShiftHQ Contact Form Submission",
    html: `
      <h2>New EasyShiftHQ Contact Form Submission</h2>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.companyName}</p>
      <p><strong>Number of Locations:</strong> ${data.locationCount}</p>
    `,
  })

  console.log("[v0] Admin email result:", result)
  return result
}

async function sendUserConfirmation(email: string, companyName: string) {
  const from = process.env.SENDER_EMAIL_WELCOME as string

  console.log("[v0] sendUserConfirmation - from:", from, "to:", email)

  if (!from) {
    throw new Error("Missing email configuration for user confirmation")
  }

  const result = await resend.emails.send({
    from,
    to: email,
    subject: "Thanks for Reaching Out to EasyShiftHQ",
    html: `
      <h2>Thanks for Reaching Out!</h2>
      <p>Hi ${companyName},</p>
      <p>Thank you for your interest in EasyShiftHQ! We received your message and will be in touch shortly.</p>
      <p>We're helping multi-unit restaurant operators like you gain real-time visibility into food costs, labor %, and shrinkage — so you can finally stop guessing and start knowing.</p>
      <p>In the meantime, if you have any questions, feel free to reply to this email.</p>
      <p>Best regards,<br>The EasyShiftHQ Team</p>
    `,
  })

  console.log("[v0] User email result:", result)
  return result
}
