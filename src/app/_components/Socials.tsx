import {buttonVariants} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {Github} from "./icons/Github";
import Linkedin from "./icons/Linkedin";
import { Email } from "./icons/Email";

const SOCIALS = [
    {
        name: "GitHub",
        url: "https://github.com/webb1es",
        icon: <Github size={14} />,
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/webbies",
        icon: <Linkedin size={14} />,
    },
    {
        name: "Email",
        url: "mailto:wrmuchefa@gmail.com",
        icon: <Email size={14} />,
    },
];

export const Socials = ({className}: { className?: string }) => {
    return (
        <div className={cn("flex gap-2", className)}>
            {SOCIALS.map((social) => (
                <Link
                    key={social.name}
                    className={cn(buttonVariants({variant: "outline"}), "size-8 p-0")}
                    href={social.url}
                >
                    {social.icon}
                </Link>
            ))}
        </div>
    );
};
