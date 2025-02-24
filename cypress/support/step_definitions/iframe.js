import "../commands";
const { Given } = require('@badeball/cypress-cucumber-preprocessor');

Given('iframe selection',()=>{
cy.visit("https://demo.guru99.com/test/guru99home/");
  // // Wait for the iframe to load
  // cy.frameLoaded('#a077aa5e'); // Replace '#iframeID' with the actual iframe selector

  // // Interact with elements inside the iframe
  // cy.iframe().find("//img[@src='Jmeter720.png']").click();
  cy.getIframe('#a077aa5e').then((iframe) => {
    // Now you can interact with elements inside the iframe
   // iframe.;
    cy.wrap(iframe).find("//[src='Jmeter720.png']").focus(); //[src='Jmeter720.png']
  });
});