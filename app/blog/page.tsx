import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { formatDate } from '@/utils/dateUtils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Blog - Roberto Priego Bautista",
  description: "Personal portfolio of Roberto Priego Bautista",
}

interface Post {
  slug: string
  title: string
  date: string
  description: string
  author: string
  authorImage?: string
}

function parseFrontMatter(content: string): Record<string, string> {
  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---/;
  const match = content.match(frontMatterRegex);
  
  if (!match) return {};

  const frontMatter = match[1];
  const data: Record<string, string> = {};
  
  frontMatter.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split(':');
    if (key && valueParts.length) {
      data[key.trim()] = valueParts.join(':').trim();
    }
  });

  return data;
}

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'public', 'posts')
  let posts: Post[] = []

  try {
    if (fs.existsSync(postsDirectory)) {
      const filenames = fs.readdirSync(postsDirectory)

      posts = filenames.map(filename => {
        const filePath = path.join(postsDirectory, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const frontMatter = parseFrontMatter(fileContents)
        
        const post: Post = {
          slug: filename.replace('.md', ''),
          title: frontMatter.title || filename,
          date: frontMatter.date || '',
          description: frontMatter.description || '',
          author: frontMatter.author || 'Unknown',
          authorImage: frontMatter.authorImage,
        }

        console.log(`Processed post:`, post); // Debug log

        return post;
      })
    } else {
      console.warn("Posts directory does not exist:", postsDirectory)
    }
  } catch (error) {
    console.error("Error reading posts directory:", error)
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold mb-4">No blog posts found</h2>
        <p>Check back later for new content!</p>
      </div>
    )
  }

  

  return (
    <div className="space-y-8">
      <main className="container mx-auto px-4 py-8 max-w-3xl">
      {posts.map(post => (
        <Card key={post.slug} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex justify-between gap-6">
              <div className="flex-1 space-y-4">
                <div className="text-sm text-muted-foreground">
                  By{' '}
                  <Link href={`/author/${post.author.toLowerCase()}`} className="hover:underline">
                    {post.author}
                  </Link>
                </div>
                
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold leading-tight hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </Link>
                
                {post.description && (
                  <p className="text-muted-foreground">
                    {post.description}
                  </p>
                )}
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{formatDate(post.date)}</span>
                </div>
              </div>
              
              {post.authorImage && (
                <div className="hidden sm:block flex-shrink-0">
                  <Image
                    src={post.authorImage}
                    alt={`${post.author}'s profile`}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
      </main>
    </div>
  )
}
