/// <reference types = "cypress"/>

import { LoginPage } from "../e2e/pages/login_page.js"

const loginPage = new LoginPage()

describe('Assertion test',()=>{
    beforeEach(()=>{
        cy.visit('/login')
    })

    it('Dashboard Assertion',()=>{

        loginPage.headingAssertion()
        loginPage.enterUsername('dudhe_bhanubhakta_dhungel')
        loginPage.enterPassword('123456')
        loginPage.Login()
        
        cy.get('.page-name').contains('Dashboard')
        cy.get('.toaster-content').should("contain","Welcome, Bhanubhakta Dhungel")
       
    })
})