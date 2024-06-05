class Passengerpage{

    // Locators
    verify_url='PassengerDetails';
    titleField='#ctl00_c_ctPax1_txtPS_TITLED';
    resultForMr='.highlighted';
    firstNameField='#ctl00_c_ctPax1_txtFirstName';
    lastNameField='#ctl00_c_ctPax1_txtLastName';
    contactDetailsSection='#ctl00_c_ctPax1_aPassVerfCollapse'
    countryField='#ctl00_c_Cont_txtCountryCode1';
    phoneNumberField='#ctl00_c_Cont_txtContactNum1';
    emailField='#ctl00_c_Cont_txtEmail';
    saveAndNextBtn='#ctl00_c_lnkBookPax';

    // Methods
    verifyPassengerpageUrl(){
        cy.url().should('include',this.verify_url)
    }
 
    Passengertitle(title){
        cy.get(this.titleField).type(title)
        cy.get(this.resultForMr).click()
    }
    PassengerFirstName(firstname){
        cy.get(this.firstNameField).type(firstname)
        
    }
    PassengerLastName(lastname){
        cy.get(this.lastNameField).type(lastname)
    }
   
    openContactDetails(){
        cy.get(this.contactDetailsSection).click()
    }

    enterUserCountry(country){
        cy.get(this.countryField).type(country).type('{enter}')
    }
    enterUserPhone(phone){
        cy.get(this.phoneNumberField).type(phone).type('{enter}')
    }
    enterUserEmail(email){
        cy.get(this.emailField).type(email).type('{enter}')
    }

    clickOnSaveAndNext(){
        cy.get(this.saveAndNextBtn).click()
    }

}
export default Passengerpage