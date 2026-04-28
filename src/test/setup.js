import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Garante que cada teste comece com um DOM limpo,
// evitando vazamento de estado entre testes.
afterEach(() => {
  cleanup();
});
