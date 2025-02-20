import { cn } from "@/lib/utils";

export type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export const Section = (props: SectionProps) => {
  return (
    <section className={cn("max-w-2xl mx-auto p-4", props.className)}>
      {props.children}
    </section>
  );
};

export const SectionTitle = (props: SectionProps) => {
  return (
    <div className="mb-4" id={props.id}>
      <h2 className="text-xs font-semibold uppercase tracking-wider text-primary font-heading">
        {props.children}
      </h2>
    </div>
  );
};
