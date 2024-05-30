class Pricepage {
    // Locators
    url_verify='SelectPrice';
    departureFlightHeader='.ts-fbr-flight-list__header-title-content#leg-OB';
    departureFlightDirection='Cairo to Dubai';
    economyDepartureFlightBox='.ts-fbr-option__trigger#option-0-1-0';
    economyDepartureFlight='#ctl00_c_FlightResultOutBound_rptBoundResult_ctl00_ctl05_ctl51_ancSelect';
    returnFlightHeader='.ts-fbr-flight-list__header-title-content#leg-IB';
    returnFlightDirection='Dubai to Cairo';
    economyReturnFlightBox='.ts-fbr-option__trigger#option-1-1-0';
    economyReturnFlight='#ctl00_c_FlightResultInBound_rptBoundResult_ctl00_ctl05_ctl51_ancSelect';
    continueToPassengersBtn='#ctl00_c_lnkContinue'

    //Methods
    verifyPricepageUrl(){
        cy.url().should('include',this.url_verify)
    }
    verifyDepartureDirection(){
        cy.get(this.departureFlightHeader).should('be.visible').should('contain',this.departureFlightDirection)
    }
    selectDepartureFlight(){
        cy.get(this.economyDepartureFlightBox).click()
        cy.get(this.economyDepartureFlight).click()
    }
    verifyReturnDirection(){
        cy.get(this.returnFlightHeader).should('be.visible').should('contain',this.returnFlightDirection)
    }
    selectReturnFlight(){
        cy.get(this.economyReturnFlightBox).click()
        cy.get(this.economyReturnFlight).click()
    }
    clickOnContinueToPassenger(){
        cy.get(this.continueToPassengersBtn).click()
    }
}
export default Pricepage