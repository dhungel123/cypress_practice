const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    baseUrl: "https://portal.firstlink.net.np/portal",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
