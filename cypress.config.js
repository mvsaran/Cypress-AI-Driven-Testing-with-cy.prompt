const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4y8o8z",
  e2e: {
          experimentalPromptCommand : true,
          chromeWebSecurity: false,
           defaultCommandTimeout: 60000,
          pageLoadTimeout: 60000
      
    },
  
});
