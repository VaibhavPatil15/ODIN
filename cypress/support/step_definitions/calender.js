// import data from '../../fixtures/testData.json'; // Correct the import path to reference the commands file
// const { Given, Before } = require('@badeball/cypress-cucumber-preprocessor');

 Utility function to get the current date in YYYY-MM-DDThh:mm format
// function getCurrentDateTime() {
//   const today = new Date();
//   const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
//   const day = String(today.getDate()).padStart(2, '0');
//   const year = today.getFullYear();
//   const hours = String(today.getHours()).padStart(2, '0');
//   const minutes = String(today.getMinutes()).padStart(2, '0');
//   return `${year}-${month}-${day}T${hours}:${minutes}`;
// }

// Given('date selection', () => {
// //   const currentDateTime = this.getCurrentDateTime();
// //   cy.log(`Current DateTime: ${currentDateTime}`);

// //   cy.visit("https://demo.guru99.com/test/");
// //   cy.xpath("//input[@name='bdaytime']").type(currentDateTime).tab();
// });