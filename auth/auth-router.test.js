const request = require('supertest');
const router = require('./auth-router');

//sanity check, connected

describe('auth router module', ()=>{
  it('is the testing environment', ()=>{
    expect(process.env.DB_ENV).toBe('testing');
    expect(process.env.DB_ENV).not.toBe('production');
    expect(process.env.DB_ENV).not.toBe('development');
  });
});

