import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Projects from './Projects.jsx';
import { projects } from '../data/portfolio.js';

describe('<Projects />', () => {
  it('shows the "Projects" heading', () => {
    render(<Projects />);
    expect(
      screen.getByRole('heading', { level: 2, name: /^projects$/i })
    ).toBeInTheDocument();
  });

  it('renders one card per registered project', () => {
    render(<Projects />);
    const articles = document.querySelectorAll('article');
    expect(articles).toHaveLength(projects.length);
  });

  it('shows title, description and tech stack for every project', () => {
    render(<Projects />);

    projects.forEach((project) => {
      expect(
        screen.getByRole('heading', { level: 3, name: project.title })
      ).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
      project.tech.forEach((tech) => {
        // .getAllByText pois o mesmo nome de stack pode repetir entre projetos
        expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
      });
    });
  });

  it('uses project title as image alt and opens live demo in a new tab', () => {
    render(<Projects />);

    projects.forEach((project) => {
      const img = screen.getByAltText(project.title);
      expect(img).toHaveAttribute('src', project.image);

      const openLink = screen.getByRole('link', {
        name: `Open ${project.title}`,
      });
      expect(openLink).toHaveAttribute('href', project.liveUrl);
      expect(openLink).toHaveAttribute('target', '_blank');
      expect(openLink).toHaveAttribute('rel', 'noreferrer');
    });
  });

  it('exposes accessible aria-labels for repository and demo links', () => {
    render(<Projects />);

    projects.forEach((project) => {
      expect(
        screen.getByRole('link', {
          name: `${project.title} GitHub repository`,
        })
      ).toHaveAttribute('href', project.repoUrl);

      expect(
        screen.getByRole('link', { name: `${project.title} live demo` })
      ).toHaveAttribute('href', project.liveUrl);
    });
  });
});
