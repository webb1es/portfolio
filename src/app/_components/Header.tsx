"use client";

import Link from "next/link";
import {Section} from "./Section";
import {useState} from "react";
import Menu from "./icons/Menu";

export const Header = () => {
    const [menuIsActive, setMenuIsActive] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-background">
            <Section className="flex items-center justify-between py-2 mb-10">
                <div className="text-primary text-xl md:text-2xl font-bold font-caption">
                    <Link href="/">Webster Muchefa</Link>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <Menu menuIsActive={menuIsActive} setMenuIsActive={setMenuIsActive} />
                </div>
                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <nav className="flex justify-between text-xs md:text-sm font-heading">
                        <ul className="flex items-center">
                            <li className="px-2 hover:text-primary transition-colors duration-300 ease-in-out">
                                <Link href="/#projects">Projects</Link>
                            </li>
                            <li className="px-2 hover:text-primary transition-colors duration-300 ease-in-out">
                                <Link href="/#about">About</Link>
                            </li>
                            <li className="px-2 hover:text-primary transition-colors duration-300 ease-in-out">
                                <Link href="/#contact">Contact</Link>
                            </li>
                            <li className="px-2 hover:text-primary transition-colors duration-300 ease-in-out">
                                <Link href="/blog">Blog</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* Mobile Navigation */}
                {menuIsActive && (
                    <div className="absolute top-full left-0 right-0 bg-background md:hidden border-t border-border">
                        <nav className="py-4">
                            <ul className="flex flex-col items-center space-y-4">
                                <li className="hover:text-primary transition-colors duration-300 ease-in-out">
                                    <Link href="/#projects" onClick={() => setMenuIsActive(false)}>Projects</Link>
                                </li>
                                <li className="hover:text-primary transition-colors duration-300 ease-in-out">
                                    <Link href="/#about" onClick={() => setMenuIsActive(false)}>About</Link>
                                </li>
                                <li className="hover:text-primary transition-colors duration-300 ease-in-out">
                                    <Link href="/#contact" onClick={() => setMenuIsActive(false)}>Contact</Link>
                                </li>
                                <li className="hover:text-primary transition-colors duration-300 ease-in-out">
                                    <Link href="/blog" onClick={() => setMenuIsActive(false)}>Blog</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}
            </Section>
        </header>
    );
};
