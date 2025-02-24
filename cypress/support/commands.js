import testData from '../fixtures/testData.json';

Cypress.Commands.add("LaunchURL", () => {
    cy.visit(testData.testURL);   // To launch the URL
    cy.title().should('eq', 'Register: Mercury Tours'); 
  });


  Cypress.Commands.add("DropDownValue", (xpath,value) => {
    cy.get(xpath).select(value);
    cy.get(xpath).invoke('text').then((text) => {
      // Do something with the text
      cy.log(text);
    });
  });
  
  Cypress.Commands.add('getIframe', (iframeSelector) => {
    return cy
        .get(iframeSelector)
        //.its('0.contentDocument.body')
        .then(cy.wrap);
});