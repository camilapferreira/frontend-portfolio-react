import { personalInfo, aboutParagraphs } from '../data/portfolio.js';

export default function About() {
  return (
    <section id="about" className="py-20">
      <h2 className="section-title">About Me</h2>

      <div className="grid gap-10 md:grid-cols-5 md:items-start">
        <div className="space-y-4 text-light-slate md:col-span-3">
          {aboutParagraphs.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="md:col-span-2">
          <div className="group relative mx-auto w-fit">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded border-2 border-accent-green transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
            <img
              src={personalInfo.photo}
              alt={personalInfo.fullName}
              className="relative max-w-[280px] rounded grayscale transition-all duration-300 group-hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
