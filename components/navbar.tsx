"use client"

import Link from "next/link"
import { Github, Linkedin, MonitorSmartphone, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslation } from "@/hooks/useTranslation"

export function Navbar() {
  const { setTheme, theme } = useTheme()
  // const { language, setLanguage } = useLanguage()
  const { t } = useTranslation()

  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-10 border-b border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/">
              <MonitorSmartphone className="h-6 w-6 text-primary" />
            </Link>
            <nav className="flex items-center gap-3">
              <Link 
                href="/"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {t('about')}
              </Link>
              <Link 
                href="/projects"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {t('works')}
              </Link>
              <Link 
                href="https://drive.google.com/file/d/1AiZ90eZdwhVPDhv1rCrKPaUBPbeG1v0Z/view?usp=sharing"
                target="_blank"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {t('cv')}
              </Link>
              <div className="relative">
                <Link 
                  href="/blog"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {t('blog')}
                  <span className="absolute -top-2.5 -right-6.5 bg-red-600 text-white text-[9px] px-1 py-0.75 rounded-full">
                    {t('new')}
                  </span>
                </Link>
              </div>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Link 
              href="https://github.com/rpribau"
              target="_blank"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link 
              href="https://linkedin.com"
              target="_blank"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            {/* <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                >
                  <Languages className="h-5 w-5" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="bg-background border border-border rounded-lg p-4">
                <p className="text-sm text-charcoal dark:text-sage mb-2">
                  {t('language')}
                </p>
                <div className="flex flex-col gap-2">
                  <Button
                    variant={language === 'en' ? 'default' : 'outline'}
                    onClick={() => setLanguage('en')}
                    className="w-full justify-start"
                  >
                    English
                  </Button>
                  <Button
                    variant={language === 'es' ? 'default' : 'outline'}
                    onClick={() => setLanguage('es')}
                    className="w-full justify-start"
                  >
                    Español
                  </Button>
                </div>
              </PopoverContent>
            </Popover> */}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">{t('toggleTheme')}</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

