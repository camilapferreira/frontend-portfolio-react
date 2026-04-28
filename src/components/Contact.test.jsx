import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from './Contact.jsx';
import { contacts, personalInfo } from '../data/portfolio.js';

describe('<Contact />', () => {
  it('shows "Get In Touch" heading and the location from personalInfo', () => {
    render(<Contact />);

    expect(
      screen.getByRole('heading', { level: 2, name: /get in touch/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(`Based in ${personalInfo.location}`)
    ).toBeInTheDocument();
  });

  it('uses the contacts email in the "Say Hello" mailto link', () => {
    render(<Contact />);

    const link = screen.getByRole('link', { name: /say hello/i });
    expect(link).toHaveAttribute('href', `mailto:${contacts.email}`);
  });

  it('exposes GitHub, LinkedIn and email links with aria-label', () => {
    render(<Contact />);

    expect(
      screen.getByRole('link', { name: /github profile/i })
    ).toHaveAttribute('href', contacts.github);

    expect(
      screen.getByRole('link', { name: /linkedin profile/i })
    ).toHaveAttribute('href', contacts.linkedin);

    expect(
      screen.getByRole('link', {
        name: `Send email to ${contacts.email}`,
      })
    ).toHaveAttribute('href', `mailto:${contacts.email}`);
  });

  it('opens external links in a new tab with rel="noreferrer"', () => {
    render(<Contact />);

    const github = screen.getByRole('link', { name: /github profile/i });
    const linkedin = screen.getByRole('link', { name: /linkedin profile/i });

    [github, linkedin].forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    });
  });
});
