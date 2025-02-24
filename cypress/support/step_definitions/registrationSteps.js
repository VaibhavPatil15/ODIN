// import '../commands.js'; // Correct the import path to reference the commands file
// const { Given } = require('@badeball/cypress-cucumber-preprocessor');

// Given('I am on the registration page', () => {
//   cy.LaunchURL(); 
//   cy.get("[name='firstName']").type("Vaibhav");
//   cy.get("[name='lastName']").type("Patil");
//   cy.DropDownValue("[name='country']", "INDIA");
// });

import '../commands'; // Correct the import path to reference the commands file
const { Given } = require('@badeball/cypress-cucumber-preprocessor');
Given('I am on the registration page', () => {
  cy.LaunchURL(); 
  cy.get("[name='firstName']").type("John");
  cy.get("[name='lastName']").type("AB");
 
  
  cy.xpath("//select[@name='country']//option").then((length)=>{
    for(let i=1;i<length.length;i++)
    {
      cy.xpath("//select[@name='country']//option["+i+"]").invoke('text').then((text)=>{
        if(text==="ANGOLA")
        {
          cy.xpath("//select[@name='country']", text);
          cy.screenshot();
        }
      })
    }
  })
});