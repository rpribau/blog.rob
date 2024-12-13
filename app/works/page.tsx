import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Works | Portfolio",
  description: "My portfolio works"
}

export default function WorksPage() {
  return (
    <div className="container max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Currently working on:</h1>
      
      <div className="grid grid-cols-1 gap-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Vanttec - SDV and USV Project</CardTitle>
            <CardDescription>March 15, 2024 - Now</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Creating object detecion and tracking algorithms for autonomous vehicles using computer vision.
            </p>
            <Button>Learn More</Button>
          </CardContent>
        </Card>

        <h1 className="text-4xl font-bold">Latest work:</h1>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Air Quality Forecasting System in the Metropolitan Area of Monterrey</CardTitle>
            <CardDescription>Using shadcn/ui components</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Forecast predictive models using binomial logistic regression and random forest for each monitoring station in the northern zone of Monterrey's metropolitan area.
            </p>
            <Button>Learn more</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}