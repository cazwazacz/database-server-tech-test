const supertest = require('supertest');
const assert = require('assert');
const app = require('../../app');

const session = require('supertest-session');
let testSession = null;

beforeEach(function() {
  testSession = session(app);
})

after(function(done) {
  const server = app.listen(4000);
  server.close(done);
});

it("should get session variable back", function(done) {
      testSession.get('/set')
      .end(function(err, res) {
        if (err) return done(err);
        testSession.get('/get')
        .end(function(err, res) {
          if (err) return done(err);
          console.log(res.text);
          done();
        })
      })
  })
