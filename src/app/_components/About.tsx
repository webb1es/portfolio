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
          With over 7 years in the tech industry, I've led teams in building 
          impactful solutions that have significantly boosted business growth. 
          From processing millions of insurance policies to developing mobile apps 
          used by millions, I love tackling complex challenges and turning them 
          into elegant solutions.
        </p>
      </div>
      <div>
        <p>
          I'm particularly passionate about mentoring junior developers and 
          building systems that scale. When I'm not coding, you might find me 
          exploring new technologies or collaborating with cross-functional teams 
          to deliver high-impact solutions.
        </p>
      </div>
    </div>
  );
  return (
    <Section>
      <SectionTitle id="about">About Me</SectionTitle>
      <div className="text-sm mb-4">
        <p>
          I'm a Senior Software Engineer specializing in insurtech, fintech, and mobile applications. 
          My expertise spans across GO Lang, Java, Python, and modern frameworks, allowing me to 
          build robust, scalable solutions that drive real business value.
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
