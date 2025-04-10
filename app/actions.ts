"use server"

import sgMail from "@sendgrid/mail"

// Define the type for our form data
type WaitlistFormData = {
  email: string
  companyName: string
  locationCount: number
}

// Initialize SendGrid with our API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

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
      message: "Thank you for joining our waitlist! We'll be in touch soon.",
    }
  } catch (error) {
    console.error("Error joining waitlist:", error)
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    }
  }
}

// Update the sendAdminNotification function to use environment variables
async function sendAdminNotification(data: WaitlistFormData) {
  const msg = {
    to: process.env.ADMIN_EMAIL as string, // Admin email from environment variable
    from: process.env.SENDER_EMAIL_NOTIFICATIONS as string, // Notification sender from environment variable
    subject: "New ShiftEase Waitlist Signup",
    text: `
      New waitlist signup:
      
      Email: ${data.email}
      Company: ${data.companyName}
      Number of Locations: ${data.locationCount}
    `,
    html: `
      <h2>New ShiftEase Waitlist Signup</h2>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.companyName}</p>
      <p><strong>Number of Locations:</strong> ${data.locationCount}</p>
    `,
  }

  await sgMail.send(msg)
}

// Update the sendUserConfirmation function to use environment variables
async function sendUserConfirmation(email: string, companyName: string) {
  const msg = {
    to: email,
    from: process.env.SENDER_EMAIL_WELCOME as string, // Welcome sender from environment variable
    subject: "Welcome to the ShiftEase Waitlist",
    text: `
      Hi ${companyName},
      
      Thank you for joining the ShiftEase waitlist! We're excited to have you on board.
      
      We're working hard to build the best AI-powered scheduling solution for multi-unit restaurant operators like you. We'll keep you updated on our progress and let you know as soon as early access is available.
      
      If you have any questions in the meantime, feel free to reply to this email.
      
      Best regards,
      The ShiftEase Team
    `,
    html: `
      <h2>Welcome to the ShiftEase Waitlist!</h2>
      <p>Hi ${companyName},</p>
      <p>Thank you for joining the ShiftEase waitlist! We're excited to have you on board.</p>
      <p>We're working hard to build the best AI-powered scheduling solution for multi-unit restaurant operators like you. We'll keep you updated on our progress and let you know as soon as early access is available.</p>
      <p>If you have any questions in the meantime, feel free to reply to this email.</p>
      <p>Best regards,<br>The ShiftEase Team</p>
    `,
  }

  await sgMail.send(msg)
}
