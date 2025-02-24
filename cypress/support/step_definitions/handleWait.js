import '../commands'; // Correct the import path to reference the commands file
const { Given } = require('@badeball/cypress-cucumber-preprocessor');

Given('user waits for some condition and then clicks', () => {
  
cy.visit("https://www.hyrtutorials.com/p/waits-demo.html");
    //cy.wait(5000); Do not prefer change the cypress defauky time it works as explicit wait
  cy.xpath("//button[@id='btn1']").click();
  cy.xpath("//button[@id='btn2']").click();
});