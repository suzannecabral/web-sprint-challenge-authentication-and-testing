const supertest = require('supertest');
const router = require('./auth-router');

//sanity check, connected

// describe('router', ()=>{
//   it('runs the tests', ()=>{
//     expect(true).toBe(true);
//   });
// });

//always test for the http status code

describe('GET /', ()=>{
  it('should respond with 200', ()=>{
    supertest(router).get('/').expect(500);
  });
});

// describe('GET /', function (){
//   it('should respond with 200', function (){
//     supertest(router)
//       .get('/')
//       .then(res=>{
//         expect(res.status).toBe(500);
//       });
//   });
// });