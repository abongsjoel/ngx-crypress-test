/// <reference types="cypress" />

describe('Our first suite', () => {
  it('first test', () => {

    cy.visit('/')
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()

    //by Tag Name
    cy.get('input')

    //by ID
    cy.get('#inputEmail1')

    //by Class name
    cy.get('.input-full-width')

    //by Attribute name
    cy.get('[placeholder="Email"]')
    
    //by Attribute name and value
    cy.get('[placeholder="Email"]')

    //by Class value
    cy.get('[class="input-full-width size-medium shape-rectangle"]')

    //by Tag name and Attribute with value
    cy.get('input[placeholder="Email"]')

    //by Two different attributes 
    cy.get('[placeholder="Email"][fullwidth][type="email"]')

    //by Tag name, Attribute with value, ID and Class name
    cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

    //The most recommended way by Cypress
    cy.get('[data-cy="imputEmail1"]')
  })
})

