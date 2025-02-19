"use client";

import {useState} from "react";
import {buttonVariants} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {Modal} from "@/components/ui/modal";
import {ContactForm} from "./ContactForm";
import {Section, SectionTitle} from "./Section";

export const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <Section>
            <SectionTitle id="contact">Let&apos;s connect</SectionTitle>
            <div className="space-y-4 flex flex-col items-center">
                <div>
                    <p>
                        Any questions, proposals, or collaborations? Feel free to reach out.{" "}
                    </p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className={cn(
                        buttonVariants({variant: "outline"}),
                        "bg-primary text-white"
                    )}
                >
                    Say Hello
                </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <ContactForm onClose={() => setIsModalOpen(false)}/>
            </Modal>
        </Section>
    );
};
