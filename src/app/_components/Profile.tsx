import { buttonVariants } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "./Section";
import { Socials } from "./Socials";
export const Profile = () => {
  return (
    <Section className="py-8 relative">
      <div className="flex items-start justify-between  ">
        {/* about */}
        <div className="space-y-1">
          <h1 className="text-md md:text-2xl font-bold font-heading">
            Hi,{" "}
            <TypingAnimation startOnView={true} className="inline-block m-0">
              I&apos;m Webster Muchefa
            </TypingAnimation>
          </h1>
          <p className="text-muted-foreground max-w-md font-light text-xs md:text-sm">
            a self-taught fullstack developer, specializing in building scalable
            and efficient backend systems.
          </p>
          <span className="relative mt-2 text-xs md:text-sm font-medium inline-flex items-center text-black-400 dark:text-zinc-200">
            Lome, Togo
          </span>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/29043511"
            alt="Profile"
            className=" rounded-full max-w-24 max-h-24"
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
