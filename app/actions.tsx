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

// Both emails below are assembled as HTML string literals, so anything a
// visitor typed has to be escaped before it goes in. A company name is
// free text, and an operator reading the notification should see it as
// text rather than as markup their mail client renders.
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function joinWaitlist(formData: FormData): Promise<{ success: boolean; message: string }> {
  try {
    // Extract and validate form data
    const email = formData.get("email") as string
    const companyName = formData.get("companyName") as string
    const locationCount = Number.parseInt(formData.get("locationCount") as string, 10)

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
    await sendAdminNotification(waitlistData)

    // Send confirmation email to user
    await sendUserConfirmation(email, companyName)

    // Return success message
    return {
      success: true,
      message: "Thank you for your interest! We'll be in touch soon.",
    }
  } catch (error) {
    // Deliberately logs the failure and not the submission: the form body is
    // a visitor's email address and employer.
    console.error("Error joining waitlist:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}

async function sendAdminNotification(data: WaitlistFormData) {
  const from = process.env.SENDER_EMAIL_NOTIFICATIONS as string
  const to = process.env.ADMIN_EMAIL as string

  if (!from || !to) {
    throw new Error("Missing email configuration for admin notification")
  }

  return resend.emails.send({
    from,
    to,
    subject: "New EasyShiftHQ Contact Form Submission",
    html: `
      <h2>New EasyShiftHQ Contact Form Submission</h2>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Company:</strong> ${escapeHtml(data.companyName)}</p>
      <p><strong>Number of Locations:</strong> ${data.locationCount}</p>
    `,
  })
}

async function sendUserConfirmation(email: string, companyName: string) {
  const from = process.env.SENDER_EMAIL_WELCOME as string

  if (!from) {
    throw new Error("Missing email configuration for user confirmation")
  }

  return resend.emails.send({
    from,
    to: email,
    subject: "Thanks for Reaching Out to EasyShiftHQ",
    html: `
      <h2>Thanks for Reaching Out!</h2>
      <p>Hi ${escapeHtml(companyName)},</p>
      <p>Thank you for your interest in EasyShiftHQ! We received your message and will be in touch shortly.</p>
      <p>We're helping multi-unit restaurant operators like you gain real-time visibility into food costs, labor %, and shrinkage — so you can finally stop guessing and start knowing.</p>
      <p>In the meantime, if you have any questions, feel free to reply to this email.</p>
      <p>Best regards,<br>The EasyShiftHQ Team</p>
    `,
  })
}
