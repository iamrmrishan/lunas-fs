import Link from "next/link"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-3 pt-6 md:pb-3 md:pt-10 lg:py-15">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Where Every Opinion Counts: Discover the Best
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            A Community-Driven Hub to Help You Discover the Best Products,
            Services, and Experiences Through Honest and Insightful Reviews, So
            You Can Make Informed Decisions That Truly Matter.
          </p>
          <div className="space-x-4 space-y-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Browse Reviews
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Publish a Review / Ask Questions
            </Link>
          </div>
        </div>
      </section>
      <section
        id="statistics"
        className="container space-y-5 py-3 dark:bg-transparent md:py-3 lg:py-3"
      >
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex flex-col rounded-lg px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-muted-foreground">
                Total reviews
              </dt>
              <dd className="text-4xl font-extrabold md:text-5xl">48</dd>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex flex-col rounded-lg px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-muted-foreground">
                Total Quesions
              </dt>
              <dd className="text-4xl font-extrabold md:text-5xl">21</dd>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex flex-col rounded-lg px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-muted-foreground">
                Total users
              </dt>
              <dd className="text-4xl font-extrabold md:text-5xl">61</dd>
            </div>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-5 py-3 dark:bg-transparent md:py-3 lg:py-3"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[160px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Top Review Categories</h3>
                <p className="text-sm text-muted-foreground">
                  Easily navigate through a curated selection of top-rated
                  products and services in various categories.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[160px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Comments Section</h3>
                <p className="text-sm text-muted-foreground">
                  Engage with a vibrant community of users through the comments
                  section, sharing experiences, insights, and recommendations.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[160px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Rating System</h3>
                <p className="text-sm text-muted-foreground">
                  Quickly assess the overall sentiment of a review with a clear
                  and concise rating system, providing at-a-glance insights.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[160px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Featured Reviews</h3>
                <p className="text-sm text-muted-foreground">
                  Spotlight exceptional reviews that offer exceptional insights,
                  helping users find the cream of the crop.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[160px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">Bookmarking and Favorites</h3>
                <p className="text-sm text-muted-foreground">
                  Save and organize reviews for quick reference in the future,
                  making it easy to revisit products or services of interest.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[160px] flex-col justify-between rounded-md p-6">
              <div className="space-y-2">
                <h3 className="font-bold">User Recommendations</h3>
                <p className="text-sm text-muted-foreground">
                  Discover products and services that have been highly
                  recommended by fellow community members.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Project LUNAS also includes a full-featured rich text editor to
            create and publish reviews easily.
          </p>
        </div>
      </section>
    </>
  )
}
