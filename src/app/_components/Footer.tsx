import {Section} from "./Section";
import {Socials} from "./Socials";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background">
            <Section className="py-4 border-t-2 border-border flex justify-between">
                <div className="flex flex-col items-center justify-center">
                    <p>© {currentYear} Webbies </p>
                </div>
                <Socials/>
            </Section>
        </footer>
    );
}
