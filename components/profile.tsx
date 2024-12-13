import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function Profile() {
  return (
    <div className="space-y-6">
      <Card className="bg-sand dark:bg-charcoal">
        <CardContent className="p-4">
          <p className="text-center text-maroon dark:text-sand">
            Hello, I&apos;m a student at Tecnologico de Monterrey based in Mexico!
          </p>
        </CardContent>
      </Card>
      
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        <div className="flex flex-col items-center space-y-4 text-center md:items-start md:text-left md:flex-1">
          <Avatar className="h-32 w-32 border-4 border-maroon dark:border-coral">
            <AvatarImage src="/placeholder.svg" alt="Profile" />
            <AvatarFallback className="bg-sage text-sand">RP</AvatarFallback>
          </Avatar>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-maroon dark:text-coral">Roberto Priego Bautista</h1>
            <p className="text-charcoal dark:text-sage">
              @rpribau (Developer / STEM passionate / FIRST Alumni)
            </p>
          </div>
        </div>

        <div className="space-y-4 md:flex-1">
          <h2 className="text-2xl font-bold text-maroon dark:text-coral">Work</h2>
          <p className="text-lg leading-relaxed text-charcoal dark:text-sage">
            I&apos;m an independent developer who tries to learn according to my needs or
            projects that I have in mind so that I can become a full-stack developer
            in the near future. I&apos;m currently based in Monterrey studying Data Science
            and Mathematics focused mainly on artificial intelligence. At the moment I
            work at Tecnologico de Monterrey as a Data Analysis intern, however
            I&apos;m open to new offers.
          </p>
          <Button className="bg-coral hover:bg-maroon text-sand dark:bg-maroon dark:hover:bg-coral">
            More About Me
          </Button>
        </div>
      </div>
    </div>
  )
}

