'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useEffect, useState } from 'react'

interface Translations {
  [key: string]: string;
}

export const useTranslation = () => {
  const { language } = useLanguage()
  const [translations, setTranslations] = useState<Translations>({})

  useEffect(() => {
    const loadTranslations = async () => {
      const response = await fetch(`/locales/${language}.json`)
      const data = await response.json()
      setTranslations(data)
    }
    loadTranslations()
  }, [language])

  const t = (key: string) => {
    return translations[key] || key
  }

  return { t }
}

