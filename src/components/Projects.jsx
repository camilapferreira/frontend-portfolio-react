import { projects } from '../data/portfolio.js';

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <h2 className="section-title">Projects</h2>

      <div className="space-y-24">
        {projects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} reverse={idx % 2 === 1} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, reverse }) {
  return (
    <article className="grid gap-6 md:grid-cols-12 md:items-center md:gap-2">
      {/* Image */}
      <div
        className={`md:col-span-7 ${
          reverse ? 'md:col-start-6' : 'md:col-start-1'
        } md:row-start-1`}
      >
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="group relative block overflow-hidden rounded"
          aria-label={`Open ${project.title}`}
        >
          <div className="absolute inset-0 z-10 bg-accent-green/40 transition-colors duration-300 group-hover:bg-transparent" />
          <img
            src={project.image}
            alt={project.title}
            className="w-full rounded object-cover"
            loading="lazy"
          />
        </a>
      </div>

      {/* Content */}
      <div
        className={`relative z-20 md:col-span-6 md:row-start-1 ${
          reverse
            ? 'md:col-start-1 md:text-left'
            : 'md:col-start-7 md:text-right'
        }`}
      >
        <p className="mb-1 font-mono text-sm text-accent-green">
          Featured Project
        </p>
        <h3 className="mb-4 text-2xl font-bold text-lightest-slate">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-accent-green"
          >
            {project.title}
          </a>
        </h3>
        <div className="rounded bg-dark-violet/30 p-5 text-light-slate shadow-lg backdrop-blur md:p-6">
          <p>{project.description}</p>
        </div>
        <ul
          className={`mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-light-slate ${
            reverse ? 'md:justify-start' : 'md:justify-end'
          }`}
        >
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div
          className={`mt-4 flex gap-4 ${
            reverse ? 'md:justify-start' : 'md:justify-end'
          }`}
        >
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} GitHub repository`}
              className="text-lightest-slate transition-colors hover:text-accent-green"
            >
              <GithubIcon />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} live demo`}
              className="text-lightest-slate transition-colors hover:text-accent-green"
            >
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a10.97 10.97 0 015.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.45-2.69 5.41-5.25 5.7.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
