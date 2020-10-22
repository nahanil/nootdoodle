const sails = require('sails');

// Before running any tests...
before(function(done) {
  let sailsOptions = {
    log: { level: 'error' },
    hooks: {}
  };

  // Increase the Mocha timeout so that Sails has enough time to lift, even if you have a bunch of assets.
  // Extended to 2 minutes in case we're running in CI environment and recreating the database with fresh test data
  this.timeout(2 * 60 * 1000);
  sails.lift(sailsOptions, (err) => {
    if (err) {
      return done(err);
    }
    // here you can load fixtures, etc.
    // TODO: Import testing data!

    return done();
  });
});

// After all tests have finished...
after((done) => {
  // here you can clear fixtures, etc.
  // (e.g. you might want to destroy the records you created above)
  sails.lower(done);
});

