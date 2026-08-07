const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor');
const { createEsbuildPlugin } = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const { allureCypress } = require('allure-cypress/reporter');
const cypressOnFixModule = require('cypress-on-fix');
const cypressOnFix = cypressOnFixModule.default || cypressOnFixModule;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      on = cypressOnFix(on);

      await addCucumberPreprocessorPlugin(on, config);

      on('file:preprocessor', createBundler({
        plugins: [createEsbuildPlugin(config)]
      }));

      allureCypress(on, config);

      return config
    },

    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'http://localhost:3000/',
  },
})
