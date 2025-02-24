const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  reporter: 'mochawesome',
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on('file:preprocessor', bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    specPattern: 'cypress/e2e/featuresFiles/**/*.feature', // Ensure this path is correct
    supportFile: 'cypress/support/e2e.js', // Ensure the support file is correctly referenced
    defaultCommandTimeout: 30000, // Set default command timeout to 10 seconds waits for the element to appear
    pageLoadTimeout: 30000, // Set page load timeout to 60 seconds
    retries: {
      runMode: 0, // Number of retries when running tests in `cypress run`
      openMode: 0, // Number of retries when running tests in `cypress open`
    },
    video: true,
  },
});