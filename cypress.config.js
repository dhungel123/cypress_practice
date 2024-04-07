const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://portal.firstlink.net.np/portal",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
