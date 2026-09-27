import { useEffect } from "react";
import data from "@/data/brewing.json";

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

export default function BrewingPage() {
  useEffect(() => {
    document.title = "Brewing - Tom Zmyslo";
  }, []);

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="container mt-14 px-4 pt-8 pb-12 md:px-0 md:pt-12"
    >
      <header className="mb-9 border-b border-slate-300 pb-7 md:mb-10">
        <h1 className="mb-4 text-4xl font-bold text-sky-900">Brewing</h1>
        <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
          From homebrew competitions to the taproom and production floor, my experience in beer
          spans serving, cellaring, and packaging. Here’s a look at my work in brewing along the
          way.
        </p>
      </header>

      <div className="grid items-start gap-10 lg:grid-cols-3 lg:gap-12">
        <section aria-labelledby="brewing-experience" className="min-w-0 lg:col-span-2">
          <h2
            id="brewing-experience"
            className="mb-6 border-b border-slate-300 pb-3 text-xl font-bold uppercase"
          >
            Experience
          </h2>
          <div className="space-y-8">
            {data.experience.map((item) => (
              <article key={item.company}>
                <h3 className="mb-4 text-lg font-bold text-sky-900">{item.company}</h3>
                <div className="space-y-6 border-l-2 border-sky-100 pl-5">
                  {item.roles.map((role) => (
                    <div key={`${role.title}-${role.tenure}`}>
                      <h4 className="text-sm font-semibold md:text-base">{role.title}</h4>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{role.tenure}</p>
                      <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm leading-6 text-slate-600 marker:text-slate-400">
                        {role.responsibilities.map((responsibility) => (
                          <li key={responsibility}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="min-w-0 space-y-9">
          <section aria-labelledby="brewing-certifications">
            <h2
              id="brewing-certifications"
              className="mb-5 border-b border-slate-300 pb-3 text-xl font-bold uppercase"
            >
              Certifications
            </h2>
            <div className="space-y-4">
              {data.certifications.map((item) => (
                <article
                  key={item.title}
                  className="rounded-md border border-sky-100 bg-sky-50 p-5"
                >
                  <p className="mb-2 text-xs font-semibold tracking-wide text-sky-900 uppercase">
                    {item.title}
                  </p>
                  <h3 className="text-lg font-semibold text-sky-900">{item.subtitle}</h3>
                  <time dateTime={item.date} className="mt-3 block text-xs text-slate-500">
                    {formatDate(item.date)}
                  </time>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="brewing-accolades">
            <h2
              id="brewing-accolades"
              className="mb-5 border-b border-slate-300 pb-3 text-xl font-bold uppercase"
            >
              Accolades
            </h2>
            <div className="divide-y divide-slate-200">
              {data.accolades.map((item) => (
                <article key={`${item.name}-${item.date}`} className="py-5 first:pt-0 last:pb-0">
                  <p className="mb-3 inline-block rounded bg-sky-100 px-2 py-1 text-xs font-medium text-sky-900">
                    {item.place}
                  </p>
                  <h3 className="mb-1 font-semibold">{item.beer}</h3>
                  <p className="text-sm leading-6 text-slate-600">{item.name}</p>
                  <time dateTime={item.date} className="mt-2 block text-xs text-slate-500">
                    {formatDate(item.date)}
                  </time>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
