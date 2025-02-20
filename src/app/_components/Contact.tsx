import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section, SectionTitle } from "./Section";

export const Contact = () => {
  return (
    <Section>
      <SectionTitle id="contact">Let&apos;s connect</SectionTitle>
      <div className="space-y-4 flex flex-col items-center">
        <div>
          <p>
            Any questions, proposals, or collaborations? Feel free to reach out.{" "}
          </p>
        </div>
        <Link
          href="mailto:wrmuchefa@gmail.com"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "bg-primary text-white"
          )}
        >
          Say Hello
        </Link>
      </div>
    </Section>
  );
};
