class HomePage {
    // Locators
    acceptCookiesbtn = '#onetrust-accept-btn-handler';
    destinationField = '.search-flight__section > :nth-child(4) > :nth-child(1) > .medium--four-fifths > .grid > :nth-child(2) > .js-dropdown-v2 > .destination-dropdown > .dropdown__input-container > .field > .field__text'
    destinationSelection = '.search-flight__section > :nth-child(4) > :nth-child(1) > .medium--four-fifths > .grid > :nth-child(2) > .js-dropdown-v2 > .destination-dropdown > .dropdown > .location > #listboxApartHoliday > .location__item > .dropdown__link > .location__airport > .location__airport__city'
    destination = 'Dubai'
    departureDay = '.eol-calendar--visible > .ek-datepicker__holder > .ek-datepicker > :nth-child(2)';
    returnDate = '.eol-calendar--visible > .ek-datepicker__holder > .ek-datepicker > :nth-child(2)';
    nextMonthBtn = '.eol-calendar--visible > .ek-datepicker__holder > .ek-datepicker > :nth-child(3) > .ek-datepicker__column-title > .ek-datepicker__button';
    continueBtn = '.js-widget-submit';
    loginBtn = '.account-username'

    // Methods
    visit() {
        cy.visit(Cypress.env("homepage_url"))
    }

    acceptCookies(){
        cy.get(this.acceptCookiesbtn).click()
    }

    selectDestination(destination) {
        cy.get(this.destinationField).type(destination)
        cy.get(this.destinationSelection).contains(this.destination).click()
    }

    selectDates() {
        // departure should be tomorrow
        // return should be after 60 days regardless the date 
        const today = new Date();
        const date = new Date();
        var departureDate = new Date();
        // var departureDate= date.getDate()            
        departureDate.setDate(date.getDate()+1)         // setting departure date to be tomorrow
        var departureDay = departureDate.getDate()

        //cy.get(this.departureDay).contains(departureDay.toString()).click() 
        cy.log(departureDay)
        cy.get('td').filter((index, element) => {
            return Cypress.$(element).text().trim() === departureDay.toString();
          }).first().click();
        
        var returnDate = new Date();
        returnDate.setDate(date.getDate() + 60); // setting return date 60 days from tomorrow 
        var returnDay = returnDate.getDate()
        // var returnDay = new Date();    
        // returnDay = date.setDate(date.getDate()+60)

        const monthsDifference = (returnDate.getFullYear() - today.getFullYear()) * 12 + (returnDate.getMonth() - today.getMonth());
        for (let i = 0; i < monthsDifference; i++) {
            cy.get(this.nextMonthBtn).click({multiple:true})
        }
        
        // cy.get(this.returnDate).contains(returnDate.getDate().toString()).click() 
        cy.log(returnDay.toString())
        cy.get('td').filter((index, element) => {
            return Cypress.$(element).text().trim() === returnDay.toString();
          }).first().click();

    }

    clickOnContinue() {

        cy.get(this.continueBtn).first().click()
    }

    clickOnLogin() {
        cy.get(this.loginBtn).click({force:true})
    }
    
}
export default HomePage