import { personalInfo } from '../data/portfolio.js';

export default function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[80vh] flex-col justify-center py-16"
    >
      <p className="mb-4 font-mono text-base text-accent-green">
        {personalInfo.greeting}
      </p>

      <h1 className="text-4xl font-bold text-lightest-slate sm:text-5xl md:text-7xl">
        {personalInfo.name}.
      </h1>

      <h2 className="mt-3 text-3xl font-bold text-light-slate sm:text-4xl md:text-6xl">
        {personalInfo.tagline}
      </h2>

      <p className="mt-6 max-w-xl text-base text-light-slate md:text-lg">
        {personalInfo.shortBio.split('frontend developer')[0]}
        <span className="text-accent-green">frontend developer</span>
        {personalInfo.shortBio.split('frontend developer')[1] || '.'}
      </p>

      <div className="mt-10">
        <a href="#contact" className="btn-outline font-mono text-base">
          Contact Me
        </a>
      </div>
    </section>
  );
}
