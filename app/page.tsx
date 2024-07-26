import { CreateUrl } from "@/components/create-url";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-auto">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl  text-center font-extrabold">
        The only URL Shortener <br /> you&rsquo;ll ever need! 👇
      </h2>
      <CreateUrl />
      <div className="max-w-5xl w-full mt-20 px-11 space-y-5 md:px-0">
        <Accordion type="multiple" className="w-full md:px-11">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How does the shorten works?
            </AccordionTrigger>
            <AccordionContent>
              When you enter a long URL, our system generates a shorter version of
              that URL. This shortened URL redirects to the original long URL when
              accessed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Do I need an account to use the app?
            </AccordionTrigger>
            <AccordionContent>
              Yes. Creating an account allows you to manage your URLs, view
              analytics, and customize your short URLs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What analytics are available for my shortened URLs?
            </AccordionTrigger>
            <AccordionContent>
              You can view the number of clicks, geolocation data of the clicks
              and device types (mobile/desktop) for each of your shortened URLs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex items-center justify-center">
          <Link href="#" className={buttonVariants({ variant: "ghost" })}>
            <Github />
          </Link>
        </div>
      </div>

    </div>
  )
}
