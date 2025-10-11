import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "./fonts.css"
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "Nexoris — Tech Solutions",
  description:
    "Nexoris is a technology solutions company delivering cloud infrastructure, custom software, DevOps, and enterprise IT consulting.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/images/design-mode/Favs/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/design-mode/Favs/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/design-mode/Favs/favicon.ico" },
    ],
    apple: [
      { url: "/images/design-mode/Favs/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/images/design-mode/Favs/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/design-mode/Favs/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/images/design-mode/Favs/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
