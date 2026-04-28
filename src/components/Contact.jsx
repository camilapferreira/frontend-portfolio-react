import { contacts, personalInfo } from '../data/portfolio.js';

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-2xl flex-col items-center py-20 text-center"
    >
      <p className="mb-3 font-mono text-base text-accent-green">
        What&apos;s next?
      </p>
      <h2 className="mb-4 text-4xl font-bold text-lightest-slate md:text-5xl">
        Get In Touch
      </h2>
      <p className="mb-8 text-light-slate">
        I&apos;m currently open to new opportunities. Whether you have a
        question, want to collaborate, or just want to say hi — my inbox is
        always open. I&apos;ll do my best to get back to you!
      </p>

      <a
        href={`mailto:${contacts.email}`}
        className="btn-outline font-mono text-base"
      >
        Say Hello
      </a>

      <div className="mt-10 flex items-center gap-6">
        <a
          href={contacts.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
          className="text-light-slate transition-colors hover:text-accent-green"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.69-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a10.97 10.97 0 015.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.45-2.69 5.41-5.25 5.7.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
          </svg>
        </a>
        <a
          href={contacts.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
          className="text-light-slate transition-colors hover:text-accent-green"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
        <a
          href={`mailto:${contacts.email}`}
          aria-label={`Send email to ${contacts.email}`}
          className="text-light-slate transition-colors hover:text-accent-green"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </a>
      </div>

      <p className="mt-8 font-mono text-sm text-light-slate">
        Based in {personalInfo.location}
      </p>
    </section>
  );
}
