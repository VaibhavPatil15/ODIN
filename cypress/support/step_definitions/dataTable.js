

import "../commands";
const { Given } = require('@badeball/cypress-cucumber-preprocessor');

Given('user fetches data from table', () => {
    cy.visit("https://demo.guru99.com/test/web-table-element.php");
    cy.xpath("//table[@class='dataTable']/ dv/tr").then((len) => {
        cy.log("Total rows in table: " + len.length);
        for (let i = 1; i < len.length; i++) {
            cy.xpath("//table[@class='dataTable']//tr[" + i + "]//td").then((len2) => {
                cy.log("Total columns in table: " + len2.length);
                //cy.log("Data in table: "+len2);
                for (let j = 1; j <= len2.length; j++) {
                    if (j == len2.length) {
                        cy.xpath("//table[@class='dataTable']//tr[" + i + "]//td[" + j + "]").invoke('text').then((txt) => {
                            const value = parseFloat(txt.replace(/[^\d.-]/g, '')); // Convert text to number
                            if (value > 5.00) {

                                cy.log(txt);
                            }

                        })
                    }



                }
            })
        }
    })
})

//cy.xpath("df").invoke(" ")