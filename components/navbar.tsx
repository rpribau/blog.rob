"use client"

import Link from "next/link"
import { Github, Linkedin, MonitorSmartphone, Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function Navbar() {
  const { setTheme, theme } = useTheme()

  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-10 border-b border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/">
              <MonitorSmartphone className="h-6 w-6 text-primary" />
            </Link>
            <nav className="flex items-center gap-6">
              <Link 
                href="/about"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link 
                href="/works"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                Works
              </Link>
              <Link 
                href="/cv"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                CV
              </Link>
              <div className="relative">
                <Link 
                  href="/blog"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Blog
                  <span className="absolute -top-2.5 -right-6.5 bg-red-600 text-white text-[9px] px-1 py-0.75 rounded-full">
                    NEW
                  </span>
                </Link>
              </div>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com"
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
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

