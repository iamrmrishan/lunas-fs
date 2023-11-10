import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import PublishForm from '@/components/publish-form';
import dynamic from 'next/dynamic';


export default function Pubish() {

  
  return (
    <div className="flex min-h-screen w-full flex-col items-start justify-start pt-20">
      <div className="grid grid-cols-6 gap-2 w-full">
        <div className="col-span-6 md:col-span-4 lg:col-span-4 m-5">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-md">Create Review</CardTitle>
              <CardDescription>
                Create a product review by filling out the form
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className=" flex items-center space-x-4 rounded-md border-none p-4">
              <PublishForm/>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-6 md:col-span-2 lg:col-span-2 m-5">
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-md">
                Proof-read before posting
              </CardTitle>
              <CardDescription>
                Now that you're ready to post your question, read through it
                from start to finish. Does it make sense? Add any details you
                missed and read through it again. Now is a good time to make
                sure that your title still describes the problem!
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-md">
                Proof-read before posting
              </CardTitle>
              <CardDescription>
                Describe what you tried, what you expected to happen, and what
                actually resulted. Minimum 20 characters.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-md">
                Proof-read before posting
              </CardTitle>
              <CardDescription>
                Show what you've tried, tell us what happened, and why it didn't
                meet your needs. Not all questions benefit from including code,
                but if your problem is better understood with code you've
                written, you should include a minimal, reproducible example.
                Please make sure to post code and errors as text directly to the
                question (and not as images), and format them appropriately.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle className="text-md">Adding tags</CardTitle>
              <CardDescription>
                Tags help ensure that your question will get attention from the
                right people. Tag things in more than one way so people can find
                them more easily. Add tags for product lines, projects, teams,
                and the specific technologies or languages used. Learn more
                about tagging
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}