// Client test setup
import '@testing-library/jest-dom';

// Optional: suppress unnecessary console errors in test output
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (/Warning.*not wrapped in act/.test(args[0])) return;
    originalError(...args);
  };
});

afterAll(() => {
  console.error = originalError;
});