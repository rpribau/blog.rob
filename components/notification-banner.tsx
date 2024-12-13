"use client"

import { useState } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Alert className="mb-6 bg-yellow-100 dark:bg-yellow-900">
      <AlertDescription className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span>⚠️</span>
          <span>
            The webpage is going to receive a major visual update soon. Stay tuned!
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsVisible(false)}
          className="h-4 w-4 p-0"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </AlertDescription>
    </Alert>
  )
}

