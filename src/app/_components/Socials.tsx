import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Github } from "./icons/Github";
import { Email } from "./icons/Email";
import Linkedin from "./icons/Linkedin";

export const Socials = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex gap-2", className)}>
      <Link
        className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
        href="https://github.com/webb1es"
      >
        <Github size={14} />
      </Link>
      <Link
        className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
        href="mailto:wrmuchefa@gmail.com"
      >
        <Email size={14} />
      </Link>
      <Link
        className={cn(buttonVariants({ variant: "outline" }), "size-8 p-0")}
        href="https://linkedin.com/in/your-linkedin"
      >
        <Linkedin size={14} />
      </Link>
    </div>
  );
};
