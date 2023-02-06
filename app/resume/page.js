'use client';

import Script from 'next/script';
import Experience from 'components/Experience';
import Pill from 'components/Pill';
import School from 'components/School';
import Section from 'components/Section';
import data from 'data/resume.json';

export default function ResumePage() {
  function savePdf() {
    let resume = document.getElementById('resume');
    let options = {
      margin: 1,
      filename: 'Tom Zmyslo Resume.pdf',
      pagebreak: {
        mode: 'avoid-all',
      },
      jsPDF: {
        unit: 'in',
        format: 'letter',
        orientation: 'portrait',
      },
    };
    html2pdf().set(options).from(resume).save();
  }
  return (
    <>
      <Script
        src='https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'
        strategy='beforeInteractive'
      />
      <button
        className='bg-green-400 text-slate-700 font-bold text-sm px-2 py-1 rounded'
        onClick={() => savePdf()}
      >
        Save a PDF
      </button>
      <div id='resume' className='lg:w-4/5 mx-auto my-2'>
        <Section>
          <h1 className='text-4xl font-bold text-slate-700'>Tom Zmyslo</h1>
          <p className='text-slate-500 font-semibold text-sm'>Software Engineer / Team Lead</p>
        </Section>
        <Section>
          <p className='text-sm'>
            Established Software Engineer with 13+ years experience designing and executing bespoke
            software solutions for local small businesses to global Fortune 500 clients.
          </p>
        </Section>
        <Section name='Areas of Expertise'>
          {data.expertise.map((item, i) => {
            return <Pill key={i} color='green' content={item} />;
          })}
        </Section>
        <Section name='Work Experience'>
          {data.experience.map((item, i) => {
            return <Experience key={i} details={item} />;
          })}
        </Section>
        <Section name='Technical Skills'>
          {data.skills.map((skill, i) => {
            return <Pill key={i} color='indigo' content={skill} />;
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
    </>
  );
}
