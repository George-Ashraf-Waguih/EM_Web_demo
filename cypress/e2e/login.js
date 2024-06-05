// import { contains } from "cypress/types/jquery";
/// <reference types="cypress" />

import HomePage from "../support/pageObjects/Lifecycle/Homepage";
import LoginPage from "../support/pageObjects/Login/LoginPage";

describe('Login tests', () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();

    beforeEach(function() {
        cy.fixture('login').as('loginData');
        homePage.visit();
        homePage.acceptCookies();
        homePage.clickOnLogin();
    })
    it('Negative - Empty login fields', function() {
        
        loginPage.clickOnLogin();
        loginPage.verifyErrorMessage(this.loginData.usernameMissingError)
        loginPage.verifyErrorMessage(this.loginData.passwordMissingError)
        
    });

    it('Negative - Empty username field', function() {
        
        loginPage.enterPassword(this.loginData.password)
        loginPage.clickOnLogin();
        loginPage.verifyErrorMessage(this.loginData.usernameMissingError)
        
    });

    it('Negative - Empty password field', function() {
        
        loginPage.enterUsername(this.loginData.username)
        loginPage.clickOnLogin();
        loginPage.verifyErrorMessage(this.loginData.passwordMissingError)
        
    });

    it.only('Negative - Wrong username and password', function() {
        
        loginPage.enterUsername(this.loginData.username)
        loginPage.enterPassword(this.loginData.password)
        loginPage.clickOnLogin();
        loginPage.verifyErrorMessage(this.loginData.wrongUserOrPassError)
        // cy.get('#sso-email').type('Test')
        // cy.get('#sso-password_label').type('Test')
        // cy.get('#login-button').click()
        // cy.get('.login-error').should('contain.text','Sorry, the email address, Emirates Skywards number or password you entered is incorrect. Please check and try again.')
    });

    
});