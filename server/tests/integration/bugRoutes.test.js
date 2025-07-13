const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../../src/app');
const Bug = require('../../src/models/Bug');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () => {
  await Bug.deleteMany({});
});

describe('Bug API', () => {
  it('creates a bug', async () => {
    const res = await request(app).post('/bugs').send({ title: 'Crash', description: 'Null ref' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Crash');
  });

  it('returns all bugs', async () => {
    await Bug.create({ title: 'Test', description: 'Test bug' });
    const res = await request(app).get('/bugs');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });

  it('updates a bug status', async () => {
    const bug = await Bug.create({ title: 'Fix me', description: 'In progress' });
    const res = await request(app).put(`/bugs/${bug._id}`).send({ status: 'resolved' });
    expect(res.body.status).toBe('resolved');
  });

  it('deletes a bug', async () => {
    const bug = await Bug.create({ title: 'Remove', description: 'Delete me' });
    const res = await request(app).delete(`/bugs/${bug._id}`);
    expect(res.body.message).toBe('Bug deleted');
  });
});