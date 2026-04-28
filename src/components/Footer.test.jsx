import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer.jsx';
import { contacts } from '../data/portfolio.js';

describe('<Footer />', () => {
  it('shows credit and a link to the author GitHub profile', () => {
    render(<Footer />);

    const link = screen.getByRole('link', { name: /camila ferreira/i });
    expect(link).toHaveAttribute('href', contacts.github);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
  });

  it('shows the current year in the copyright line', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`©\\s*${year}`))
    ).toBeInTheDocument();
  });
});
