import { Link } from "react-router";
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
  document.title = "Resume - Tom Zmyslo";

  return (
    <div className="container mt-16 px-4 md:px-0">
      <Section>
        <div className="mb-2 text-center">
          Download a PDF copy{" "}
          <Link
            className="font-semibold text-sky-900"
            to={resume}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            here
          </Link>
          .
        </div>
        <hr className="border-x border-slate-400" />
      </Section>

      <Section>
        <div className="flex flex-col items-start md:flex-row md:justify-between md:space-x-10">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Tom Zmyslo</h1>
            <p className="font-semibold">Senior Software Engineer</p>
          </div>
          <div className="my-0 text-sm md:my-0 md:flex-1">
            Senior Software Engineer with 10+ years of experience designing and delivering scalable,
            API-first platforms and modern web applications. Deep expertise in Ruby on Rails, React,
            distributed systems, and cloud infrastructure. Known for leading architecture decisions,
            improving deployment reliability, and delivering high-impact features for enterprise
            clients. Strong collaborator who partners with product, design, and stakeholders to ship
            resilient, maintainable software.
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
          <div className="flex items-center space-x-2">
            <Email color="text-sky-900" size={20} />
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </div>
          <div className="flex items-center space-x-2">
            <Telephone color="text-sky-900" size={20} />
            <a href={`tel:${data.mobile}`}>{formatPhoneNumber(data.mobile)}</a>
          </div>
          <div className="flex items-center space-x-2">
            <Website color="text-sky-900" size={20} />
            <a href={`https://${data.website}`} target="_blank">
              {data.website}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <GitHub color="text-sky-900" size={20} />
            <a href={`https://github.com/${data.github}`} target="_blank">
              {data.github}
            </a>
          </div>
        </div>
      </Section>

      <Section name="Core Compentencies">
        <div className="flex flex-wrap gap-1">
          {data.competencies.map((item, i) => (
            <Pill key={i} content={item} color="sky" />
          ))}
        </div>
      </Section>

      <Section name="Experience">
        {data.experience.map((item, i) => {
          return <Experience key={i} details={item} />;
        })}
      </Section>

      <Section name="Skills">
        {data.skills.map((section, i) => (
          <Skill key={i} name={section.name}>
            <div className="space-x-1">
              {section.items.map((item, i) => (
                <Pill key={i} content={item} color="sky" />
              ))}
            </div>
          </Skill>
        ))}
      </Section>

      <Section name="Education">
        {data.education.map((item, i) => {
          return <School key={i} name={item.school} location={item.location} field={item.field} />;
        })}
      </Section>
    </div>
  );
}
