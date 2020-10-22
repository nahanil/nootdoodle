// test/integration/controllers/UserController.test.js
const supertest = require('supertest');
const assert = require('chai').assert;

describe('Test action', () => {
  describe('GET /', () => {
    it('should do something', () => {
      return supertest(sails.hooks.http.app)
        .get('/')
        .expect(200);
    });

    it('should call me by my name', () => {
      return supertest(sails.hooks.http.app)
        .get('/')
				.send({ name: 'bob' })
        .expect(200);
    });
  })
  
})
           
