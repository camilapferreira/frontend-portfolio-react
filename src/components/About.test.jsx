import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About.jsx';
import { personalInfo, aboutParagraphs } from '../data/portfolio.js';

describe('<About />', () => {
  it('shows the "About Me" heading', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', { level: 2, name: /about me/i })
    ).toBeInTheDocument();
  });

  it('renders every paragraph defined in aboutParagraphs', () => {
    render(<About />);
    aboutParagraphs.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    });
  });

  it('shows the photo with an accessible alt using fullName', () => {
    render(<About />);
    const img = screen.getByRole('img', { name: personalInfo.fullName });
    expect(img).toHaveAttribute('src', personalInfo.photo);
  });
});
