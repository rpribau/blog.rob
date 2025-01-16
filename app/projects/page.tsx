import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink } from 'lucide-react'

interface ProjectLinks {
  github?: string
  live?: string
}

interface ProjectFrontMatter {
  title?: string
  description?: string
  image?: string
  logo?: string
  date?: string
  tags?: string[]
  featured?: boolean
  links?: ProjectLinks
}

interface Project {
  slug: string
  title: string
  description: string
  image: string
  logo: string
  date: string
  tags: string[]
  featured: boolean
  links: ProjectLinks
}

function parseFrontMatter(content: string): ProjectFrontMatter {
  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---/
  const match = content.match(frontMatterRegex)

  if (!match) return {}

  const frontMatter = match[1]
  const data: ProjectFrontMatter = {}

  frontMatter.split('\n').forEach((line) => {
    const [key, ...valueParts] = line.split(':')
    if (key && valueParts.length) {
      let value = valueParts.join(':').trim()

      // Remove quotes if present
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1)
      }

      // Handle different value types
      const trimmedKey = key.trim() as keyof ProjectFrontMatter
      
      if (trimmedKey === 'tags') {
        // Always return an array for tags
        if (value.startsWith('[') && value.endsWith(']')) {
          data[trimmedKey] = value
            .slice(1, -1)
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean)
        } else {
          data[trimmedKey] = [value]
        }
      } else if (trimmedKey === 'featured') {
        // Convert to boolean
        data[trimmedKey] = value.toLowerCase() === 'true'
      } else if (trimmedKey === 'links') {
        // Parse YAML-style links
        const links: ProjectLinks = {}
        const linkLines = value.split('\n')
        linkLines.forEach(line => {
          const [key, val] = line.trim().split(':').map(s => s.trim())
          if (key && val) {
            links[key as keyof ProjectLinks] = val.replace(/"/g, '')
          }
        })
        data[trimmedKey] = links
      } else if (trimmedKey === 'title' || trimmedKey === 'description' || 
                 trimmedKey === 'image' || trimmedKey === 'logo' || 
                 trimmedKey === 'date') {
        data[trimmedKey] = value
      }
    }
  })

  return data
}

export default function ProjectsPage() {
  const projectsDirectory = path.join(process.cwd(), 'public', 'projects')
  let projects: Project[] = []

  try {
    if (fs.existsSync(projectsDirectory)) {
      const filenames = fs.readdirSync(projectsDirectory)

      projects = filenames.map((filename) => {
        const filePath = path.join(projectsDirectory, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const frontMatter = parseFrontMatter(fileContents)

        const defaultImage = '/placeholder.svg?height=400&width=600'
        const defaultLogo = '/placeholder.svg?height=32&width=32'

        const project: Project = {
          slug: filename.replace('.md', ''),
          title: frontMatter.title || filename,
          description: frontMatter.description || '',
          image: frontMatter.image 
            ? (frontMatter.image.startsWith('/') ? frontMatter.image : `/${frontMatter.image}`)
            : defaultImage,
          logo: frontMatter.logo 
            ? (frontMatter.logo.startsWith('/') ? frontMatter.logo : `/${frontMatter.logo}`)
            : defaultLogo,
          date: frontMatter.date || new Date().toISOString(),
          tags: Array.isArray(frontMatter.tags) ? frontMatter.tags : [],
          featured: Boolean(frontMatter.featured),
          links: frontMatter.links || {},
        }

        return project
      })
    } else {
      console.warn('Projects directory does not exist:', projectsDirectory)
    }
  } catch (error) {
    console.error('Error reading projects directory:', error)
  }

  // Sort projects by date, from newest to oldest
  projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (projects.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold mb-4">No projects found</h2>
        <p>Check back later for new content!</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.slug} className="overflow-hidden flex flex-col">
            <div className="relative h-48">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full p-1">
                <Image
                  src={project.logo || "/placeholder.svg"}
                  alt={`${project.title} logo`}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </div>
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-1">
                <Link href={`/projects/${project.slug}`} className="hover:underline">
                  {project.title}
                </Link>
              </CardTitle>
              <CardDescription className="line-clamp-2">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                {new Date(project.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

