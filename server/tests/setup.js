// Server test setup
jest.setTimeout(10000); // Prevent test timeout errors with async operations

process.env.NODE_ENV = 'test'; // Signal test mode for conditional logic