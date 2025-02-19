import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProjectCard } from "./ProjectCard";
import { Section, SectionTitle } from "./Section";

export const Projects = () => {
  const ProjectList = PROJECTS.map((project) => (
    <CarouselItem
      className="min-w-0 shrink-0 grow-0 md:basis-1/2 basis-11/12 py-1 pl-1 md:pl-2"
      key={project.title}
    >
      <div className="">
        <ProjectCard
          title={project.title}
          description={project.description}
          image={project.image}
          link={project.link}
        />
      </div>
    </CarouselItem>
  ));

  return (
    <Section>
      <SectionTitle id="projects">Recent projects</SectionTitle>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1 md:-ml-2">
          {ProjectList}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
};

const PROJECTS = [
  {
    title: "MTN NextGen Mobile App",
    description: "Led the development of a cross-platform mobile application using GO Lang, ReactNative, and Swift, achieving 30% increase in user engagement.",
    image: "/projects/mtn-app.png",
    link: "#",
  },
  {
    title: "Ecosure Global Insurance",
    description: "Built a scalable life insurance platform serving 8M+ daily users across multiple African countries using Java, Spring Boot, and Angular.",
    image: "/projects/ecosure.png",
    link: "#",
  },
  {
    title: "iDriveSure",
    description: "Developed a comprehensive motor insurance system processing 6M+ policies annually using Java and PHP, with advanced policy management features.",
    image: "/projects/idrivesure.png",
    link: "#",
  },
  {
    title: "MTN Shop & Storefront",
    description: "Engineered high-traffic e-commerce platforms handling millions of monthly transactions using Angular, NestJS, and GraphQL.",
    image: "/projects/mtn-shop.png",
    link: "#",
  },
];
