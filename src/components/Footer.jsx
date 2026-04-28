import { contacts } from '../data/portfolio.js';

export default function Footer() {
  return (
    <footer className="px-6 py-8 text-center md:px-10">
      <p className="font-mono text-sm text-light-slate">
        Built with React + Vite + Tailwind by{' '}
        <a
          href={contacts.github}
          target="_blank"
          rel="noreferrer"
          className="text-accent-green hover:underline"
        >
          Camila Ferreira
        </a>
      </p>
      <p className="mt-1 font-mono text-xs text-light-slate/70">
        © {new Date().getFullYear()} — All rights reserved.
      </p>
    </footer>
  );
}
