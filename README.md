# EasyShiftHQ Landing Page

A modern, responsive landing page built with Next.js, TypeScript, and Tailwind CSS. This project serves as the front-facing website for EasyShiftHQ, featuring a beautiful UI with various interactive components.

## 🚀 Features

- ⚡️ Built with Next.js 15 and React 19
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🌙 Dark mode support
- 🎯 Interactive components using Radix UI
- 📝 Form handling with React Hook Form
- 🔍 TypeScript for type safety
- 📊 Data visualization with Recharts
- 🎨 Beautiful animations with Tailwind Animate
- 📧 Email integration with SendGrid

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Form Handling:** React Hook Form + Zod
- **Charts:** Recharts
- **Animations:** Tailwind Animate
- **Email:** SendGrid
- **Icons:** Lucide React

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/toyiyo/easyshifthq-landing.git
   cd easyshifthq-landing
   ```

2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```
   NEXT_PUBLIC_SENDGRID_API_KEY=your_sendgrid_api_key
   ```

4. Run the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
easyshifthq-landing/
├── app/                # Next.js app directory
├── components/         # Reusable UI components
│   └── ui/            # Radix UI based components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── public/            # Static assets
└── styles/            # Global styles
```

## 🚀 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For any questions or support, please reach out to the maintainers.