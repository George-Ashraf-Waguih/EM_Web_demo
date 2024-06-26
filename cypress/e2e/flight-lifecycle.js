/// <reference types="cypress" />


import Accessrestrictpage from '../support/pageObjects/Lifecycle/Accessrestictpage';
import HomePage from '../support/pageObjects/Lifecycle/Homepage';
import Passengerpage from '../support/pageObjects/Lifecycle/Passengerpage';
import Pricepage from '../support/pageObjects/Lifecycle/Pricepage';

describe('Emirates Flights Automation Test demo', () => {
    
    const homepage = new HomePage();
    const pricepage = new Pricepage();
    const passengerpage = new Passengerpage();
    const accessrestrictpage = new Accessrestrictpage();
    
    
    beforeEach(function() {
        cy.fixture('passengerDetails').as('user');
        homepage.visit();
        });


    it('Lifecycle demo',function(){
        
        homepage.acceptCookies();
        homepage.selectDestination(this.user.destination);
        homepage.selectDates();
        homepage.clickOnContinue();
        pricepage.verifyPricepageUrl();
        
        pricepage.verifyDepartureDirection();
        pricepage.selectDepartureFlight();
        pricepage.verifyReturnDirection();
        pricepage.selectReturnFlight();
        pricepage.clickOnContinueToPassenger();
        passengerpage.verifyPassengerpageUrl();

        passengerpage.Passengertitle(this.user.title)
        passengerpage.PassengerFirstName(this.user.firstname)
        passengerpage.PassengerLastName(this.user.lastname)
        passengerpage.openContactDetails();
        passengerpage.enterUserCountry(this.user.country)
        passengerpage.enterUserPhone(this.user.phone)
        passengerpage.enterUserEmail(this.user.email)
        passengerpage.clickOnSaveAndNext();
        accessrestrictpage.verifyAccessRestrictUrl();

        accessrestrictpage.verifyBannerIsDisplayed();

    })

    
});