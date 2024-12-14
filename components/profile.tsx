"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from '@/hooks/useTranslation'

export function Profile() {
  const { t } = useTranslation()

  return (
    <div className="space-y-6">
      <Card className="bg-sand dark:bg-charcoal">
        <CardContent className="p-4">
          <p className="text-center text-maroon dark:text-sand">
            {t('greeting')}
          </p>
        </CardContent>
      </Card>
      
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        <div className="flex flex-col items-center space-y-4 text-center md:items-start md:text-left md:flex-1">
          <Avatar className="h-64 w-64 border-4 border-maroon dark:border-coral">
            <AvatarImage src="https://i.imgur.com/r5TFEGw.jpg" alt={t('profileImageAlt')} />
            <AvatarFallback className="bg-sage text-sand">RP</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-maroon dark:text-coral">Roberto Priego Bautista</h1>
            <p className="text-charcoal dark:text-sage">
              {t('shortBio')}
            </p>
          </div>
        </div>

        <div className="space-y-4 md:flex-1">
          <h2 className="text-2xl font-bold text-maroon dark:text-coral">{t('aboutMeTitle')}</h2>
          <p className="text-lg leading-relaxed text-charcoal dark:text-sage text-justify">
            {t('aboutMeDescription')}
          </p>
          <Button className="bg-coral hover:bg-maroon text-sand dark:bg-maroon dark:hover:bg-coral">
            {t('moreAboutMe')}
          </Button>
        </div>
      </div>
    </div>
  )
}

