const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://admin-demo.nopcommerce.com'
  },
  viewportHeight : 1080,
  viewportWidth : 1920,
  env: {
    login : '/login',
    admin : '/admin'
  }
});
