'use client';

// import Script from 'next/script';
import Experience from 'components/Experience';
import Pill from 'components/Pill';
import School from 'components/School';
import Section from 'components/Section';
import Email from 'components/icons/Email';
import GitHub from 'components/icons/GitHub';
import Telephone from 'components/icons/Telephone';
import Website from 'components/icons/Website';
import { formatPhoneNumber } from 'utils/formatters';
import data from 'data/resume.json';

export default function ResumePage() {
  // function savePdf() {
  //   let resume = document.getElementById('resume');
  //   let options = {
  //     margin: 1,
  //     filename: 'Tom Zmyslo Resume.pdf',
  //     pagebreak: {
  //       mode: 'avoid-all',
  //     },
  //     jsPDF: {
  //       unit: 'in',
  //       format: 'letter',
  //       orientation: 'portrait',
  //     },
  //   };
  //   html2pdf().set(options).from(resume).save();
  // }

  return (
    <div className='container px-4 md:px-0 mt-14'>
      <div id='resume'>
        <Section>
          <div className='flex flex-col items-center md:justify-between md:flex-row md:space-x-8 '>
            <div className='flex flex-col space-y-1 py-2'>
              <h1 className='text-5xl font-bold'>Tom Zmyslo</h1>
              <p className='font-semibold text-lg'>Software Engineer / Team Lead</p>
            </div>
            <div className='text-sm my-0 md:my-0 md:flex-1'>
              Software Engineer with over a decade of experience developing for the web, mobile and
              desktop.
            </div>
          </div>
        </Section>
        <Section>
          <div className='grid grid-cols-2 gap-4 text-sm md:grid-cols-4'>
            <div className='flex items-center space-x-2'>
              <Email color='text-green-400' size={20} />
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </div>
            <div className='flex items-center space-x-2'>
              <Telephone color='text-green-400' size={20} />
              <a href={`tel:${data.mobile}`}>{formatPhoneNumber(data.mobile)}</a>
            </div>
            <div className='flex items-center space-x-2'>
              <Website color='text-green-400' size={20} />
              <a href={`https://${data.website}`} target='_blank'>{data.website}</a>
            </div>
            <div className='flex items-center space-x-2'>
              <GitHub color='text-green-400' size={20} />
              <a href={`https://${data.github}`} target='_blank'>{data.github}</a>
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
        <Section name='Areas of Expertise'>
          {data.expertise.map((item, i) => {
            return <Pill key={i} color='green' content={item} />;
          })}
        </Section>
        <Section name='Programming Languages'>
          {data.languages.map((lang, i) => {
            return <Pill key={i} color='indigo' content={lang} />;
          })}
        </Section>
        <Section name='Frameworks & Libraries'>
          {data.libraries.map((lib, i) => {
            return <Pill key={i} color='indigo' content={lib} />;
          })}
        </Section>
        <Section name='Platforms & Tools'>
          {data.tools.map((tool, i) => {
            return <Pill key={i} color='indigo' content={tool} />;
          })}
        </Section>
        <Section name='Experience'>
          {data.experience.map((item, i) => {
            return <Experience key={i} details={item} />;
          })}
        </Section>
        <Section name='Education'>
          {data.education.map((item, i) => {
            return (
              <School key={i} name={item.school} location={item.location} field={item.field} />
            );
          })}
        </Section>
      </div>
    </div>
  );
}

{
  /* <Script
                src='https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
                strategy='beforeInteractive'
              />
              <button
                className='bg-green-400 text-slate-700 font-bold text-sm px-2 py-1 rounded'
                onClick={() => savePdf()}
              >
                Save a PDF
              </button> */
}
