class LoginPage {

    // Locators
    emailField = '#sso-email';
    passwordField = '#sso-password_label';
    loginBtn = '#login-button';
    loginError = '.login-error';

    // Methods
    clickOnLogin(){
        cy.get(this.loginBtn).click();
    }

    enterUsername(username){
        cy.get(this.emailField).type(username);
    }

    enterPassword(password){
        cy.get(this.passwordField).type(password)
    }

    verifyErrorMessage(message){
        cy.get(this.loginError).should('contain',message)
    }
}
export default LoginPage