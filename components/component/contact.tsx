import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-gray-950 text-gray-50">
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-12 md:px-6 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get in touch
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            Have a question or want to work together? Fill out the form below
            and we'll get back to you as soon as possible.
          </p>
        </div>
        <form className="mt-10 w-full max-w-md space-y-4">
          <div>
            <Label className="sr-only" htmlFor="name">
              Name
            </Label>
            <Input
              className="bg-gray-800 text-gray-50 placeholder:text-gray-400"
              id="name"
              placeholder="Your name"
              type="text"
            />
          </div>
          <div>
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              className="bg-gray-800 text-gray-50 placeholder:text-gray-400"
              id="email"
              placeholder="Your email"
              type="email"
            />
          </div>
          <div>
            <Label className="sr-only" htmlFor="message">
              Message
            </Label>
            <Textarea
              className="bg-gray-800 text-gray-50 placeholder:text-gray-400"
              id="message"
              placeholder="Your message"
            />
          </div>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </main>
    </div>
  );
}
