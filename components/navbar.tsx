"use client"

import Link from "next/link"
import { Github, Linkedin, MonitorSmartphone, Moon, Sun, Languages } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

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
            <nav className="flex items-center gap-3">
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
                href="https://drive.google.com/file/d/1AiZ90eZdwhVPDhv1rCrKPaUBPbeG1v0Z/view?usp=sharing"
                target="_blank"
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
            <Popover>
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
                <p className="text-sm text-charcoal dark:text-sage">
                  Language
                </p>
              </PopoverContent>
            </Popover>
            
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

