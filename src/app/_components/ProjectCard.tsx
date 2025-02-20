import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from 'next/image';

export type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Link href={props.link} target="_blank">
      <Card className="w-full md:h-[250px] h-[330px] overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02]">
        <CardContent className="p-0 h-full flex flex-col">
          <div className="w-full md:h-[60%] h-[80%] overflow-hidden relative">
            <Image
              className="w-full h-full object-cover"
              src={props.image}
              alt={props.title}
              width={800}
              height={400}
            />
          </div>
          <div className="p-4 flex-1">
            <h3 className="text-md font-semibold mb-1 truncate font-heading">
              {props.title}
            </h3>
            <p className="text-xs text-muted-foreground line-clamp-2">
              {props.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
