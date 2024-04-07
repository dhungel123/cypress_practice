export class LoginPage{

    heading_class = '.login-portal-heading'
    username_textbox = '#login'
    password_textbox = '#password'
    login_button = '#submit'

    headingAssertion(){
        cy.get(this.heading_class).contains(/customer login/i).should('exist')
        cy.get(this.heading_class).should("have.text"," Customer login ")
    }
    enterUsername(username){
        cy.get(this.username_textbox).should("be.visible").type(username)
    }
    enterPassword(password){
        cy.get(this.password_textbox).should("be.visible").type(password)
    }
    Login(){
        cy.get(this.login_button).should("contain.value","Sign in")
        cy.get(this.login_button).click()
        cy.url().should("include","/dashboard")
    }


}