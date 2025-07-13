const { validateBug } = require('../../src/utils/validateBug');

describe('Bug validation', () => {
  it('passes with valid input', () => {
    expect(validateBug({ title: 'Crash', description: 'Null error', status: 'open' })).toBe(true);
  });

  it('fails without title', () => {
    expect(validateBug({ description: 'No title' })).toBe(false);
  });

  it('fails with invalid status', () => {
    expect(validateBug({ title: 'Bug', description: 'Bad status', status: 'unknown' })).toBe(false);
  });
});