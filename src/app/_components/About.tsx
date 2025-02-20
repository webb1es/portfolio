"use client";
import { useState } from "react";
import { Section, SectionTitle } from "./Section";

export const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const moreText = (
    <div
      className={`space-y-4 text-sm overflow-hidden transition-all duration-700 ease-in mb-2
      ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
    >
      <div>
        <p>
          I hold a Bachelor&apos;s degree in Mechanical Engineering from the
          École Polytechnique de Lomé (EPL). Over the past year, I have
          transitioned into the field of computer science, driven by my passion
          for technology and problem-solving. I am currently pursuing a two-year
          Master&apos;s degree in Artificial Intelligence and Big Data at the
          Collège de Paris Supérieur, where I am further deepening my expertise
          in cutting-edge technologies.
        </p>
      </div>
      <div>
        <p>
          When I&apos;m not coding, I spend my time listening to music, reading
          books, working out at the gym, and playing games or enjoying
          manga/anime.
        </p>
      </div>
    </div>
  );
  return (
    <Section>
      <SectionTitle id="about">About Me</SectionTitle>
      <div className="text-sm mb-4">
        <p>
          I&apos;m a passionate developer with a strong interest in various
          technology fields, including web development (with a primary focus on
          backend systems), cloud computing, data, game development, and AI.
          I&apos;m also deeply intrigued by business entrepreneurship and the
          intersection of technology and innovation. With over 1 year of
          experience, I&apos;ve honed my skills through personal projects and
          enjoy continuously learning and exploring new technologies to expand
          my expertise.
        </p>
      </div>
      {moreText}
      <button
        className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-4"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-4 w-4 transition-transform rotate-90"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-4 w-4 transition-transform"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        )}

        {isExpanded ? "View less" : "View more"}
      </button>
    </Section>
  );
};
