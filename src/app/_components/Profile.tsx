"use client";

import {buttonVariants} from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import {cn} from "@/lib/utils";
import {Section} from "./Section";
import {Socials} from "./Socials";
import {useState} from "react";
import {Modal} from "@/components/ui/modal";
import {CvPreview} from "./CvPreview";

export const Profile = () => {
    const [isCvModalOpen, setIsCvModalOpen] = useState(false);

    return (
        <Section className="py-8 relative">
            <div className="flex items-start justify-between">
                <div className="space-y-1">
                    <h1 className="text-md md:text-2xl font-bold font-heading">
                        Hi,{" "}
                        <TypingAnimation startOnView={true} className="inline-block m-0">
                            I&apos;m Webbies
                        </TypingAnimation>
                    </h1>
                    <p className="text-muted-foreground max-w-md font-light text-xs md:text-sm">
                        a Senior Software Engineer passionate about building scalable systems in insurtech,
                        fintech, and mobile apps that drive real business impact.
                    </p>
                    <span
                        className="relative mt-2 text-xs md:text-sm font-medium inline-flex items-center text-black-400 dark:text-zinc-200">
            Harare, Zimbabwe
          </span>
                </div>
                <div className="flex items-center justify-center">
                    <img
                        src="/webbies.png"
                        alt="Profile"
                        className="rounded-full max-w-24 max-h-24"
                    />
                </div>
            </div>
            <div className="flex items-center mt-4 gap-4">
                <button
                    onClick={() => setIsCvModalOpen(true)}
                    className={cn(
                        buttonVariants({variant: "outline"}),
                        "bg-primary text-white w-auto h-8 px-4"
                    )}
                >
                    Resume
                </button>
                <Socials/>
            </div>

            <Modal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} size="large">
                <CvPreview onClose={() => setIsCvModalOpen(false)}/>
            </Modal>
        </Section>
    );
};
