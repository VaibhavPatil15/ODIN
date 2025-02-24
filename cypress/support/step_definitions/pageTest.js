import { should } from "chai";
import "../commands";
const { Given } = require('@badeball/cypress-cucumber-preprocessor');

 Given('verify page text', () => {
// cy.visit("https://demo.guru99.com/test/guru99home/");
// cy.xpath("(//a[@title='Home'])[2]").invoke('text').then((txt) => {
   
//      cy.log(txt);
    
// })
})

Given('verify inside page text', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");   // first() for list of Webelements
    cy.xpath("//a[@href='http://www.orangehrm.com']").invoke('text').then((txt) => {
        cy.log(txt);
    })
    //should('to.be.visible'); //to check visibility of element waits asper default cypress config
    cy.xpath("//input[@name='username']").type("Admin");
    cy.xpath("//input[@name='password']").type("admin12");
    cy.xpath("//button[@type='submit']").click();
    cy.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").invoke('text').then((txt) => {
        cy.log(txt);
        expect(txt).to.equal("Invalid credentials"); //hard assertion exp
        //should(txt).equal("Invalid credentials"); //soft assertion
     })
    cy.xpath("//div[@class='orangehrm-quick-launch-heading']//p").then((len) => {
    cy.log(len.length);
    for (let i = 0; i < len.length; i++) {
        cy.log(len[i].innerText);
    }
})
  cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name']").then((len2)=>{
  cy.log(len2.length);
  for(let i=0;i<len2.length;i++){
    cy.log(len2[i].textContent);
  }

  });  
})
