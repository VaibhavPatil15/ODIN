import "../commands";
const { Given } = require('@badeball/cypress-cucumber-preprocessor');

Given('Alert selection', () => {
    cy.visit("https://www.tutorialspoint.com/selenium/practice/alerts.php");
    cy.wait(2000);
    cy.xpath("(//button[@class='btn btn-primary'])[1]").click();
    cy.log("Alert is clicked");

    // Accept the alert
    cy.on('window:alert', (str) => {
        expect(str).to.equal('I am an alert box!');
    });
    cy.on('window:confirm', () => true); // true to accept the alert

    // Dismiss the alert
    // cy.on('window:confirm', () => false); // false to dismiss the alert
});