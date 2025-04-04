import { Link } from "react-router";
import Experience from "@/components/Experience";
import Pill from "@/components/Pill";
import School from "@/components/School";
import Section from "@/components/Section";
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
            className="font-semibold text-blue-800"
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
        <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between md:space-x-8">
          <div className="flex flex-col">
            <h1>Tom Zmyslo</h1>
            <p className="text-lg font-semibold">Senior Software Engineer</p>
          </div>
          <div className="my-0 text-sm md:my-0 md:flex-1">
            Senior Software Engineer with over a decade of experience developing for the web, mobile
            and desktop.Values convention over configuration, pushing envelopes, and working
            smarter, not harder. Well-versed in the full software development lifecycle, from
            inception to development to production deployment.
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
          <div className="flex items-center space-x-2">
            <Email color="text-blue-800" size={20} />
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </div>
          <div className="flex items-center space-x-2">
            <Telephone color="text-blue-800" size={20} />
            <a href={`tel:${data.mobile}`}>{formatPhoneNumber(data.mobile)}</a>
          </div>
          <div className="flex items-center space-x-2">
            <Website color="text-blue-800" size={20} />
            <a href={`https://${data.website}`} target="_blank">
              {data.website}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <GitHub color="text-blue-800" size={20} />
            <a href={`https://github.com/${data.github}`} target="_blank">
              {data.github}
            </a>
          </div>
        </div>
      </Section>
      <Section name="Areas of Expertise">
        {data.expertise.map((item, i) => {
          return (
            <Pill key={i} backgroundColor="bg-blue-800" content={item} textColor="text-white" />
          );
        })}
      </Section>
      <Section name="Programming Languages">
        {data.languages.map((lang, i) => {
          return (
            <Pill key={i} backgroundColor="bg-blue-800" content={lang} textColor="text-white" />
          );
        })}
      </Section>
      <Section name="Frameworks & Libraries">
        {data.libraries.map((lib, i) => {
          return (
            <Pill key={i} backgroundColor="bg-blue-800" content={lib} textColor="text-white" />
          );
        })}
      </Section>
      <Section name="Platforms & Tools">
        {data.tools.map((tool, i) => {
          return (
            <Pill key={i} backgroundColor="bg-blue-800" content={tool} textColor="text-white" />
          );
        })}
      </Section>
      <Section name="Professional Experience">
        {data.experience.map((item, i) => {
          return <Experience key={i} details={item} />;
        })}
      </Section>
      <Section name="Education">
        {data.education.map((item, i) => {
          return <School key={i} name={item.school} location={item.location} field={item.field} />;
        })}
      </Section>
    </div>
  );
}
