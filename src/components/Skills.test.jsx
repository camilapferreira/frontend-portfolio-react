import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Skills from './Skills.jsx';
import { skills } from '../data/portfolio.js';

describe('<Skills />', () => {
  it('shows the "Skills" heading', () => {
    render(<Skills />);
    expect(
      screen.getByRole('heading', { level: 2, name: /skills/i })
    ).toBeInTheDocument();
  });

  it('renders one list item per registered skill', () => {
    render(<Skills />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(skills.length);
  });

  it('shows every skill name on screen', () => {
    render(<Skills />);
    skills.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });
});
