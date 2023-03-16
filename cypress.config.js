const { defineConfig } = require('cypress');

module.exports = defineConfig({
   e2e: {
      baseUrl: 'http://localhost:3000',
      setupNodeEvents(on, config) {
         // implement node event listeners here
      },
      retries: 2
   },
   viewportWidth: 2560,
   viewportHeight: 1600,
});
