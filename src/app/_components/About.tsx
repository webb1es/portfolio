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
          With over 7 years in the tech industry, I've honed my skills in cloud computing, backend systems, and AI. Leading teams to deliver impactful projects, I focus on crafting solutions that are both innovative and efficient.
        </p>
      </div>
      <div>
        <p>
          My career spans web and mobile apps, insurtech, fintech, ERPs, and SaaS, where I've tackled complex challenges and optimized performance. Mentoring junior developers is a passion, as I enjoy helping others grow and succeed.
        </p>
      </div>
      <div>
        <p>
          Outside of work, I'm often found tinkering with side projects, contributing to open-source, or hiking. I'm committed to continuous learning, always exploring new tech trends in the dynamic world of software engineering.
        </p>
      </div>
    </div>
  );

  return (
    <Section>
      <SectionTitle id="about">About Me</SectionTitle>
      <div className="text-sm mb-4">
        <p>
          I&apos;m a seasoned software engineer with a passion for building scalable, efficient, and innovative solutions. My expertise in cloud computing, backend systems, and AI has allowed me to lead teams and deliver high-impact projects that solve real-world problems across web and mobile apps, insurtech, and ERPs.
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
