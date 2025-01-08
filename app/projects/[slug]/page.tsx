import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

export async function generateStaticParams() {
  const projectsDirectory = path.join(process.cwd(), 'public', 'projects')
  const filenames = fs.readdirSync(projectsDirectory)

  return filenames.map(filename => ({
    slug: filename.replace('.md', ''),
  }))
}

export default async function Project({ params }: { params: { slug: string } }) {
  const { slug } = params
  const projectsDirectory = path.join(process.cwd(), 'public', 'projects')
  const fullPath = path.join(projectsDirectory, `${slug}.md`)

  let fileContents: string
  try {
    fileContents = fs.readFileSync(fullPath, 'utf8')
  } catch {
    notFound()
  }

  const { data, content } = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/projects">
        <Button variant="ghost" className="mb-8 -ml-2">
          <ArrowLeft className="mr-2 h-4 w-4" /> Return to Projects
        </Button>
      </Link>
      
      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
            {data.title}
          </h1>

          {data.description && (
            <p className="text-xl text-muted-foreground mb-8">
              {data.description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Image
                src={data.logo || 'https://placehold.co/40x40'}
                alt={`${data.title} logo`}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-medium">{data.title}</span>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Published on{' '}
              <time dateTime={data.date}>
                {new Date(data.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {data.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4 mb-8">
            <Button variant="outline" size="sm" asChild>
              <a href={data.links.github} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
            {data.links.live && (
              <Button size="sm" asChild>
                <a href={data.links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </header>

        <div className="relative aspect-video mb-8">
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div 
          className="prose prose-lg dark:prose-invert max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-p:leading-relaxed prose-p:mb-6
            prose-li:my-2
            prose-a:text-primary hover:prose-a:underline
          "
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>
    </div>
  )
}

