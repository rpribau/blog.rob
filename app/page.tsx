import { Navbar } from "@/components/navbar"
import { Profile } from "@/components/profile"
import { NotificationBanner } from "@/components/notification-banner"

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
