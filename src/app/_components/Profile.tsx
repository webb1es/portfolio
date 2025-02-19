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
            <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-4 md:gap-8">
                <div className="space-y-1 text-center md:text-left">
                    <h1 className="text-xl md:text-2xl font-bold font-heading">
                        Hi,{" "}
                        <TypingAnimation startOnView={true} className="inline-block m-0">
                            I&apos;m Webbies
                        </TypingAnimation>
                    </h1>
                    <p className="text-muted-foreground max-w-md font-light text-sm md:text-base">
                        a Senior Software Engineer passionate about building scalable systems in insurtech,
                        fintech, and mobile apps that drive real business impact.
                    </p>
                    <span className="relative mt-2 text-sm md:text-base font-medium inline-flex items-center text-black-400 dark:text-zinc-200">
                        Harare, Zimbabwe
                    </span>
                </div>
                <div className="flex items-center justify-center md:justify-end">
                    <img
                        src="/webbies.png"
                        alt="Profile"
                        className="rounded-full w-24 h-24 md:w-32 md:h-32"
                    />
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start mt-6 gap-4">
                <button
                    onClick={() => setIsCvModalOpen(true)}
                    className={cn(
                        buttonVariants({variant: "outline"}),
                        "bg-primary text-white w-full sm:w-auto h-10 px-6"
                    )}
                >
                    Resume
                </button>
                <Socials className="w-full sm:w-auto justify-center md:justify-start"/>
            </div>

            <Modal isOpen={isCvModalOpen} onClose={() => setIsCvModalOpen(false)} size="large">
                <CvPreview onClose={() => setIsCvModalOpen(false)}/>
            </Modal>
        </Section>
    );
};
