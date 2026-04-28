import { describe, it, expect } from 'vitest';
import {
  personalInfo,
  aboutParagraphs,
  skills,
  projects,
  contacts,
  navLinks,
} from './portfolio.js';

const HTTPS_REGEX = /^https:\/\//;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

describe('personalInfo', () => {
  it('contains the required fields used by Hero and About', () => {
    expect(personalInfo).toMatchObject({
      name: expect.any(String),
      fullName: expect.any(String),
      title: expect.any(String),
      greeting: expect.any(String),
      tagline: expect.any(String),
      shortBio: expect.any(String),
      location: expect.any(String),
      photo: expect.any(String),
    });
  });

  it('points photo to a path inside /images/', () => {
    expect(personalInfo.photo).toMatch(/^\/images\//);
  });
});

describe('aboutParagraphs', () => {
  it('is a non-empty array of strings', () => {
    expect(Array.isArray(aboutParagraphs)).toBe(true);
    expect(aboutParagraphs.length).toBeGreaterThan(0);
    aboutParagraphs.forEach((paragraph) => {
      expect(typeof paragraph).toBe('string');
      expect(paragraph.trim().length).toBeGreaterThan(0);
    });
  });
});

describe('skills', () => {
  it('is a non-empty array with unique values', () => {
    expect(Array.isArray(skills)).toBe(true);
    expect(skills.length).toBeGreaterThan(0);
    const unique = new Set(skills);
    expect(unique.size).toBe(skills.length);
  });
});

describe('projects', () => {
  it('has all expected fields on every project', () => {
    expect(projects.length).toBeGreaterThan(0);

    projects.forEach((project) => {
      expect(project).toMatchObject({
        title: expect.any(String),
        description: expect.any(String),
        image: expect.any(String),
        tech: expect.any(Array),
        liveUrl: expect.any(String),
        repoUrl: expect.any(String),
      });

      expect(project.tech.length).toBeGreaterThan(0);
      expect(project.image).toMatch(/^\/images\//);
      expect(project.liveUrl).toMatch(HTTPS_REGEX);
      expect(project.repoUrl).toMatch(HTTPS_REGEX);
    });
  });

  it('has unique titles (used as React keys)', () => {
    const titles = projects.map((p) => p.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});

describe('contacts', () => {
  it('has a valid email format', () => {
    expect(contacts.email).toMatch(EMAIL_REGEX);
  });

  it('has https URLs for github and linkedin', () => {
    expect(contacts.github).toMatch(HTTPS_REGEX);
    expect(contacts.linkedin).toMatch(HTTPS_REGEX);
  });
});

describe('navLinks', () => {
  it('every link has a label and an href starting with #', () => {
    expect(navLinks.length).toBeGreaterThan(0);
    navLinks.forEach((link) => {
      expect(link.label).toEqual(expect.any(String));
      expect(link.href).toMatch(/^#/);
    });
  });

  it('has unique hrefs (avoids duplicate navigation entries)', () => {
    const hrefs = navLinks.map((l) => l.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});
