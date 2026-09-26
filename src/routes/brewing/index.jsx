import { useEffect } from "react";
import Section from "@/components/Section";
import data from "@/data/brewing.json";
import Experience from "@/components/Experience";
import Certification from "@/components/Certification";
import Accolade from "@/components/Accolade";

export default function BrewingPage() {
  useEffect(() => {
    document.title = "Brewing - Tom Zmyslo";
  }, []);

  return (
    <div className="container mt-14 px-3 py-4 md:px-0">
      <h1 className="mb-1 text-4xl font-bold">Brewing</h1>
      <hr className="mb-4 border-x" />
      <p className="mb-6 text-sm md:text-base">TBD</p>

      <Section name="Accolades">
        {data.accolades.map((item, i) => {
          return <Accolade key={i} accolade={item} />;
        })}
      </Section>
      <Section name="Certifications">
        {data.certifications.map((item, i) => {
          return <Certification key={i} certification={item} />;
        })}
      </Section>
      <Section name="Experience">
        {data.experience.map((item, i) => {
          return <Experience key={i} details={item} />;
        })}
      </Section>
    </div>
  );
}
