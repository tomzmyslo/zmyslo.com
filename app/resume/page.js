import Link from "next/link";
import Experience from "@components/Experience";
import Pill from "@components/Pill";
import School from "@components/School";
import Section from "@components/Section";
import Email from "@components/icons/Email";
import GitHub from "@components/icons/GitHub";
import Telephone from "@components/icons/Telephone";
import Website from "@components/icons/Website";
import { formatPhoneNumber } from "@utils/formatters";
import data from "@data/resume.json";

export const metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <div className="container px-4 md:px-0 mt-14">
      <Section>
        <div className="text-center mb-2">
          Download a PDF copy{" "}
          <Link
            className="text-green-400 font-semibold"
            href="/tom_zmyslo_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            here
          </Link>
          .
        </div>
        <hr className="border-x border-slate-500" />
      </Section>
      <Section>
        <div className="flex flex-col items-start md:items-center md:justify-between md:flex-row md:space-x-8 ">
          <div className="flex flex-col space-y-1 py-2">
            <h1 className="text-5xl font-bold">Tom Zmyslo</h1>
            <p className="font-semibold text-lg">
              Software Engineer / Team Lead
            </p>
          </div>
          <div className="text-sm my-0 md:my-0 md:flex-1">
            Software Engineer with over a decade of experience developing for
            the web, mobile and desktop. I value convention over configuration,
            pushing envelopes, and working smarter, not harder. My experience
            covers the full software development lifecycle, from inception to
            development to production deployment.
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
          <div className="flex items-center space-x-2">
            <Email color="text-green-400" size={20} />
            <a href={`mailto:${data.email}`}>{data.email}</a>
          </div>
          <div className="flex items-center space-x-2">
            <Telephone color="text-green-400" size={20} />
            <a href={`tel:${data.mobile}`}>{formatPhoneNumber(data.mobile)}</a>
          </div>
          <div className="flex items-center space-x-2">
            <Website color="text-green-400" size={20} />
            <a href={`https://${data.website}`} target="_blank">
              {data.website}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <GitHub color="text-green-400" size={20} />
            <a href={`https://${data.github}`} target="_blank">
              {data.github}
            </a>
          </div>
        </div>
      </Section>
      {/* <Section>
          <p className='text-sm'>
            Software Engineer with over a decade of experience developing for the web, mobile and
            desktop. Established Software Engineer with 13+ years experience designing and executing
            bespoke software solutions for local small businesses to global Fortune 500 clients.
          </p>
        </Section> */}
      <Section name="Areas of Expertise">
        {data.expertise.map((item, i) => {
          return <Pill key={i} color="green" content={item} />;
        })}
      </Section>
      <Section name="Programming Languages">
        {data.languages.map((lang, i) => {
          return <Pill key={i} color="indigo" content={lang} />;
        })}
      </Section>
      <Section name="Frameworks & Libraries">
        {data.libraries.map((lib, i) => {
          return <Pill key={i} color="indigo" content={lib} />;
        })}
      </Section>
      <Section name="Platforms & Tools">
        {data.tools.map((tool, i) => {
          return <Pill key={i} color="indigo" content={tool} />;
        })}
      </Section>
      <Section name="Experience">
        {data.experience.map((item, i) => {
          return <Experience key={i} details={item} />;
        })}
      </Section>
      <Section name="Education">
        {data.education.map((item, i) => {
          return (
            <School
              key={i}
              name={item.school}
              location={item.location}
              field={item.field}
            />
          );
        })}
      </Section>
    </div>
  );
}
