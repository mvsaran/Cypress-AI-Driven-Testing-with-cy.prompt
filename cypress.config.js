const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "your project Id",
  e2e: {
          experimentalPromptCommand : true,
      
    },
  
});
