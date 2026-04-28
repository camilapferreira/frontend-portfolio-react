import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero.jsx';
import { personalInfo } from '../data/portfolio.js';

describe('<Hero />', () => {
  it('renders greeting, name and tagline from personalInfo', () => {
    render(<Hero />);

    expect(screen.getByText(personalInfo.greeting)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 1, name: `${personalInfo.name}.` })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: personalInfo.tagline })
    ).toBeInTheDocument();
  });

  it('has a "Contact Me" link pointing to the #contact section', () => {
    render(<Hero />);

    const link = screen.getByRole('link', { name: /contact me/i });
    expect(link).toHaveAttribute('href', '#contact');
  });
});
