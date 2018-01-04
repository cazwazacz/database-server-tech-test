const supertest = require('supertest');
const assert = require('assert');
const app = require('../../app');

after(function(done) {
  const server = app.listen(4000);
  server.close(done);
});

describe('set route', function() {
  it('should return 200 OK', function(done) {
    supertest(app)
    .get('/set')
    .expect(200)
    .end(done);
  })
})
