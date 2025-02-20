import { buttonVariants } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "./Section";
import { Socials } from "./Socials";
import Image from 'next/image';

export const Profile = () => {
  return (
    <Section className="py-8 relative">
      <div className="flex items-start justify-between">
        {/* about */}
        <div className="space-y-1">
          <h1 className="text-md md:text-2xl font-bold font-heading">
            Hi,{" "}
            <TypingAnimation startOnView={true} className="inline-block m-0">
              I&apos;m Webster Muchefa
            </TypingAnimation>
          </h1>
          <p className="text-muted-foreground max-w-md font-light text-xs md:text-sm">
            A tech enthusiast and Senior Software Engineer with a knack for
            crafting scalable, secure solutions in insurtech, fintech, and
            beyond. I thrive on solving complex problems and aligning tech
            innovation with business goals.
          </p>
          <span className="relative mt-2 text-xs md:text-sm font-medium inline-flex items-center text-black-400 dark:text-zinc-200">
            Harare, Zimbabwe
          </span>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="https://avatars.githubusercontent.com/u/29043511"
            alt="Profile"
            width={96}
            height={96}
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex items-center mt-4 gap-4">
        <Link
          className={cn(
            buttonVariants({ variant: "outline" }),
            "bg-primary text-white w-auto h-8 px-4"
          )}
          href="https://drive.google.com/file/d/1tLnhpqkx5velSVuislj3g21d0ejsgjSw/view"
        >
          Resume
        </Link>
        <Socials />
      </div>
    </Section>
  );
};
