import { skills } from '../data/portfolio.js';

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="section-title">Skills</h2>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="flex items-center font-mono text-sm text-light-slate"
          >
            <span className="mr-2 text-accent-green">▹</span>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
