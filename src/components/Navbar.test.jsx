import { describe, it, expect, beforeEach } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar.jsx';
import { navLinks } from '../data/portfolio.js';

describe('<Navbar />', () => {
  beforeEach(() => {
    // Garante posição inicial de scroll = 0 para os testes de "scrolled"
    window.scrollY = 0;
  });

  it('renders the "<CF/>" logo as a link to the top', () => {
    render(<Navbar />);
    const logo = screen.getByRole('link', { name: /home/i });
    expect(logo).toHaveAttribute('href', '#top');
    expect(logo).toHaveTextContent('<CF/>');
  });

  it('renders one navigation link per item in navLinks', () => {
    render(<Navbar />);

    navLinks.forEach((link) => {
      // Cada label aparece duas vezes (desktop e mobile menu, mesmo escondido).
      // Usamos getAllByRole e validamos que pelo menos um tem o href correto.
      const matches = screen.getAllByRole('link', {
        name: new RegExp(`\\d{2}\\.\\s*${link.label}`, 'i'),
      });
      expect(matches.length).toBeGreaterThan(0);
      matches.forEach((el) => expect(el).toHaveAttribute('href', link.href));
    });
  });

  describe('mobile menu', () => {
    it('starts closed (aria-expanded="false")', () => {
      render(<Navbar />);
      const toggle = screen.getByRole('button', {
        name: /toggle navigation/i,
      });
      expect(toggle).toHaveAttribute('aria-expanded', 'false');
    });

    it('opens when the toggle button is clicked', async () => {
      const user = userEvent.setup();
      render(<Navbar />);

      const toggle = screen.getByRole('button', {
        name: /toggle navigation/i,
      });
      await user.click(toggle);

      expect(toggle).toHaveAttribute('aria-expanded', 'true');
    });

    it('closes when a navigation link is clicked', async () => {
      const user = userEvent.setup();
      render(<Navbar />);

      const toggle = screen.getByRole('button', {
        name: /toggle navigation/i,
      });
      await user.click(toggle);
      expect(toggle).toHaveAttribute('aria-expanded', 'true');

      // Pega qualquer link de navegação e clica
      const aboutLinks = screen.getAllByRole('link', {
        name: new RegExp(`\\d{2}\\.\\s*${navLinks[0].label}`, 'i'),
      });
      await user.click(aboutLinks[aboutLinks.length - 1]);

      expect(toggle).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('scroll behavior', () => {
    it('applies translucent background when scrollY > 20', () => {
      const { container } = render(<Navbar />);
      const header = container.querySelector('header');

      // Estado inicial: sem fundo
      expect(header.className).toContain('bg-transparent');

      // Simula scroll passando de 20px e dispara o evento
      act(() => {
        window.scrollY = 100;
        window.dispatchEvent(new Event('scroll'));
      });

      expect(header.className).toContain('bg-dark-navy/90');
      expect(header.className).not.toContain('bg-transparent');
    });

    it('goes back to transparent when scroll returns to top', () => {
      const { container } = render(<Navbar />);
      const header = container.querySelector('header');

      act(() => {
        window.scrollY = 200;
        window.dispatchEvent(new Event('scroll'));
      });
      expect(header.className).toContain('bg-dark-navy/90');

      act(() => {
        window.scrollY = 0;
        window.dispatchEvent(new Event('scroll'));
      });
      expect(header.className).toContain('bg-transparent');
    });
  });
});
