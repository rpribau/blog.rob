import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'public', 'posts')
  const filenames = await fs.readdir(postsDirectory)

  return filenames.map(filename => ({
    slug: filename.replace('.md', ''),
  }))
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const postsDirectory = path.join(process.cwd(), 'public', 'posts')
  const fullPath = path.join(postsDirectory, `${slug}.md`)

  let fileContents: string
  try {
    fileContents = await fs.readFile(fullPath, 'utf8')
  } catch {
    notFound()
  }

  const { data, content } = matter(fileContents)


  const processedContent = await remark()
    .use(html)
    .process(content)
  const contentHtml = processedContent.toString()

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/blog">
        <Button variant="ghost" className="mb-8 -ml-2">
          <ArrowLeft className="mr-2 h-4 w-4" /> Return
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

          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage 
                src={data.authorImage || '/placeholder.svg?height=40&width=40'} 
                alt={data.author} 
              />
              <AvatarFallback>{data.author?.[0]}</AvatarFallback>
            </Avatar>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="font-medium">{data.author}</span>
                
              </div>
              
              <div className="text-sm text-muted-foreground">
                Published. {' '}
                <Link href={`/category/${data.category?.toLowerCase()}`} className="text-primary hover:underline">
                  {data.category}
                </Link>
                {' · '}
                <time dateTime={data.date}>
                  {new Date(data.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </time>
              </div>
            </div>
          </div>
        </header>

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

