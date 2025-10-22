const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "your project Id",
  e2e: {
          experimentalPromptCommand : true,
          chromeWebSecurity: false,
           defaultCommandTimeout: 60000,
          pageLoadTimeout: 60000
      
    },
  
});
