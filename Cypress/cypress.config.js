const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": 'https://gallery-app.vivifyideas.com/'
  },
  "scripts": {
    "cypress": "cypress open"
  },
  
  e2e: {
    "baseUrl": "https://gallery-app.vivifyideas.com/",
    "env": {
      "validLoginEmail": "saruman@isengard.com",
      "validLoginPassword": "SauronNo1"
    },
   
  },
});