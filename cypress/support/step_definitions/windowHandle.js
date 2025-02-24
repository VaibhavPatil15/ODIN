import "../commands";
const { Given } = require('@badeball/cypress-cucumber-preprocessor');

Given('user switches to new window', () => {
    cy.visit("https://www.hyrtutorials.com/p/window-handles-practice.html#google_vignette");
    cy.xpath("//button[@id='newWindowBtn']").click();
    // Handle new window
    cy.window().then((win) => {
        // Open a new window
        const newWindow = win.open('https://www.hyrtutorials.com/p/basic-controls.html', '_blank');
        
        // Wait for the new window to load
        cy.wrap(newWindow).its('document').should('exist');
        // Perform actions in the new window
        cy.wrap(newWindow).then((win) => {
            cy.title().then((title)=>{
                //cy.log(win.document.title);
                cy.log(title);
            });
            //cy.wrap(win.document.body).find("(//a[text()='Contact'])[1]").click(); // Replace with actual selector
        });
        // Close the new window
        // newWindow.close();
    });
});