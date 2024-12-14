'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ExternalLink, Github, ArrowUpDown } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: "Self-Driving Vehicle Project - Vision System",
    description: "Creating Computer Vision tools for Vehiculos No Tripulados Tec de Monterrey (Vanttec).",
    image: "/images/sdv.jpg",
    logo: "/logos/vanttec.jpg",
    date: "2023-11-15",
    tags: ["OpenCV", "YOLOvX", "CUDA", "C++", "ROS2"],
    links: {
      github: "https://github.com/yourusername/sdv-vision",
    }
  },
  {
    title: "Air Quality Forecasting System",
    description: "Forecast models for air quality in Monterrey's metropolitan area.",
    image: "/images/sima2.png",
    logo: "/logos/sima.ico",
    date: "2023-10-21",
    tags: ["Machine Learning", "Next.js", "Data Science", "Python", "Cloudflare Workers"],
    links: {
      github: "https://github.com/yourusername/air-quality-forecast",
      live: "https://monterrey-air-quality.com"
    }
  },
  {
    title: "HackMTY 2024 - AgriSense",
    description: "A tool for plant detection and care with leverage technologies such as computer vision and AI to identify and monitor plant health.",
    image: "/images/hackmty2024.png",
    logo: "/logos/hackmty.jpg",
    date: "2023-09-15",
    tags: ["OpenCV", "YOLOvX", "API Integration", "React Native"],
    links: {
      github: "https://github.com/yourusername/smart-traffic",
      live: "https://smart-traffic-demo.com"
    }
  },
  {
    title: "Ignition Hack - StudyMetrics",
    description: "An AI SaaS that empowers teachers into creating new and innovative experiences for their students, all by the power for artificial intelligence as a data centric approach.",
    image: "/images/ignitionhack.png",
    logo: "/logos/devpost.ico",
    date: "2023-08-16",
    tags: ["OpenCV", "YOLOvX", "CUDA", "C++"],
    links: {
      github: "https://github.com/yourusername/smart-traffic",
      live: "https://smart-traffic-demo.com"
    }
  }
]

export default function PortfolioPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')

  const allTags = useMemo(() => {
    const tags = new Set<string>()
    projects.forEach(project => project.tags.forEach(tag => tags.add(tag)))
    return Array.from(tags)
  }, [])

  const filteredAndSortedProjects = useMemo(() => {
    return projects
      .filter(project => 
        selectedTags.length === 0 || selectedTags.some(tag => project.tags.includes(tag))
      )
      .sort((a, b) => {
        const dateA = new Date(a.date).getTime()
        const dateB = new Date(b.date).getTime()
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA
      })
  }, [selectedTags, sortOrder])

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">My Portfolio</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar with filters */}
        <aside className="w-full lg:w-56 space-y-8 lg:sticky lg:top-4 lg:self-start">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Filter by tags</h2>
            {allTags.map(tag => (
              <div key={tag} className="flex items-center space-x-2">
                <Checkbox 
                  id={tag} 
                  checked={selectedTags.includes(tag)}
                  onCheckedChange={(checked) => {
                    setSelectedTags(prev => 
                      checked 
                        ? [...prev, tag]
                        : prev.filter(t => t !== tag)
                    )
                  }}
                />
                <label
                  htmlFor={tag}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {tag}
                </label>
              </div>
            ))}
          </div>
          
          <div className="space-y-2">
            <h2 className="text-xl font-semibold">Sort projects</h2>
            <Select
              value={sortOrder}
              onValueChange={(value: 'asc' | 'desc') => setSortOrder(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sort by date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="desc">Newest first</SelectItem>
                <SelectItem value="asc">Oldest first</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </aside>

        {/* Main content area with projects */}
        <div className="flex-2">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredAndSortedProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-background/80 rounded-full p-1">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Date: {new Date(project.date).toLocaleDateString()}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    {project.links.live && (
                      <Button size="sm" asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Button size="lg" asChild>
          <a href="/contact">
            Get in touch
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </main>
  )
}

