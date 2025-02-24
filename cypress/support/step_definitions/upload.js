import 'cypress-file-upload';
import data from '../../fixtures/testData.json'; // Correct the import path to reference the commands file
const { Given } = require('@badeball/cypress-cucumber-preprocessor');

Given('user uploads a file', () => {
    // In terminal :   npm install --save-dev cypress-file-upload
  //cy.visit("https://www.tutorialspoint.com/selenium/practice/upload-download.php");
  cy.visit("https://ps.uci.edu/~franklin/doc/file_upload.html");
  // Add your file upload logic here   //input[@id='uploadFile']
  cy.xpath("//input[@name='userfile']").attachFile('data.txt'); //D:\UI_Cypress-main\cypress\fixtures\data.txt
  //cy.xpath("//input[@id='uploadFile']").attachFile('data.txt'); //D:\UI_Cypress-main\cypress\fixtures\data.txt
  //cy.xpath("//a[@id='downloadButton']").click();
  cy.xpath("//input[@type='submit']").click();
});