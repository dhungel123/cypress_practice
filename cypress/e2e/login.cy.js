

/// <reference types = "cypress"/>

describe('Login Test',()=>{
    beforeEach(()=>{

      cy.visit('/login')

    })

    it.only('Success test',()=>{
        cy.get('.login-portal-heading').contains(/customer login/i).should('exist')
        cy.get('.login-portal-heading').should("have.text"," Customer login ")
        cy.get('#login').should("be.visible").type('dudhe_bhanubhakta_dhungel')
        cy.get('#password').should("be.visible").type('123456')
        cy.get('#submit').should("contain.value","Sign in")
        cy.get('#submit').click().as('')
        cy.url().should("include","/dashboard")
        
    })

    it('Failed test',()=>{
        cy.get('.login-portal-heading').contains(/customer login/i)
       cy.get('#login').should("be.visible").type('ujjwal')  
        cy.get('#password').should("be.visible").type('123')
        cy.get('#submit').should("contain.value","Sign in")
        cy.get('#submit').click()
        cy.get('#static').contains(/login or password incorrect/i).should("exist")
        
    })
})