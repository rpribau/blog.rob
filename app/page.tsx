import { Profile } from "@/components/profile"
import { NotificationBanner } from "@/components/notification-banner"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home - Roberto Priego Bautista",
  description: "Personal portfolio of Roberto Priego Bautista",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <NotificationBanner />
        <Profile />
      </main>
    </div>
  )
}
