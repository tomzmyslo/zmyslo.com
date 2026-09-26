import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import Pill from "@/components/Pill";

export default function Project({ project }) {
  const { name, medium, description, technologies } = project;
  return (
    <>
      <PageHeader title={name}>
        <p>{medium}</p>
      </PageHeader>
      <div className="grid items-start gap-10 lg:grid-cols-3 lg:gap-12">
        <div className="min-w-0 lg:col-span-2">
          <Section name="Overview">
            <div
              className="text-sm leading-7 text-slate-600 md:text-base [&_li]:mb-2"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Section>
        </div>
        <Section name="Technologies">
          <div className="flex flex-wrap gap-2 rounded-md border border-sky-100 bg-sky-50 p-5">
            {technologies.map((technology) => (
              <Pill key={technology} content={technology} />
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
