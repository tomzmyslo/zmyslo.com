import { useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import Experience from "@/components/Experience";
import Pill from "@/components/Pill";
import School from "@/components/School";
import Section from "@/components/Section";
import Skill from "@/components/Skill";
import Email from "@/components/icons/Email";
import GitHub from "@/components/icons/GitHub";
import Telephone from "@/components/icons/Telephone";
import Website from "@/components/icons/Website";
import { formatPhoneNumber } from "@/utils/formatters";
import data from "@/data/resume.json";
import resume from "@/assets/tom_zmyslo_resume.pdf";

export default function ResumePage() {
  useEffect(() => {
    document.title = "Resume - Tom Zmyslo";
  }, []);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="container mt-14 px-4 pt-8 pb-12 md:px-0 md:pt-12"
    >
      <PageHeader
        title="Résumé"
        action={
          <a
            href={resume}
            download
            className="rounded-md border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-900 transition-colors hover:bg-sky-100"
          >
            Download PDF <span aria-hidden="true">↓</span>
          </a>
        }
      >
        <p className="mb-3 font-semibold text-sky-900">Tom Zmyslo · Senior Software Engineer</p>
        <p>
          Senior Software Engineer with 15+ years of experience designing and delivering scalable,
          API-first platforms and modern web applications. Deep expertise in Ruby on Rails, React,
          distributed systems, and cloud infrastructure. Known for leading architecture decisions,
          improving deployment reliability, and delivering high-impact features for enterprise
          clients. Strong collaborator who partners with product, design, and stakeholders to ship
          resilient, maintainable software.
        </p>
      </PageHeader>
      <div className="grid items-start gap-10 lg:grid-cols-3 lg:gap-12">
        <div className="min-w-0 lg:col-span-2">
          <Section name="Experience">
            <div className="space-y-8">
              {data.experience.map((item) => (
                <Experience key={item.company} details={item} />
              ))}
            </div>
          </Section>
        </div>
        <div className="min-w-0 space-y-9">
          <Section name="Contact">
            <div className="space-y-4 rounded-md border border-sky-100 bg-sky-50 p-5 text-sm text-sky-900 [&_a]:break-all [&_a:hover]:underline">
              <div className="flex items-center gap-3">
                <span className="shrink-0">
                  <Email color="text-sky-900" size={20} />
                </span>
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="shrink-0">
                  <Telephone color="text-sky-900" size={20} />
                </span>
                <a href={`tel:${data.mobile}`}>{formatPhoneNumber(data.mobile)}</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="shrink-0">
                  <Website color="text-sky-900" size={20} />
                </span>
                <a href={`https://${data.website}`} target="_blank" rel="noopener noreferrer">
                  {data.website}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="shrink-0">
                  <GitHub color="text-sky-900" size={20} />
                </span>
                <a
                  href={`https://github.com/${data.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {data.github}
                </a>
              </div>
            </div>
          </Section>
          <Section name="Technical Skills">
            <div className="space-y-6">
              {data.skills.map((section) => (
                <Skill key={section.name} name={section.name}>
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <Pill key={item} content={item} />
                    ))}
                  </div>
                </Skill>
              ))}
            </div>
          </Section>
          <Section name="Education">
            <div className="space-y-5">
              {data.education.map((item) => (
                <School key={item.school} name={item.school} field={item.field} />
              ))}
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
