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
        var departureDay= date.getDate()            // setting departure date to be today
        const returnDate = new Date();
        returnDate.setDate(date.getDate() + 60);    // setting return date 60 days from today 
        cy.get(this.departureDay).contains(departureDay.toString()).click() 

        const monthsDifference = (returnDate.getFullYear() - today.getFullYear()) * 12 + (returnDate.getMonth() - today.getMonth());
        for (let i = 0; i < monthsDifference; i++) {
            cy.get(this.nextMonthBtn).click({multiple:true})
        }
        
        cy.get(this.returnDate).contains(returnDate.getDate().toString()).click() 

    }

    clickOnContinue() {

        cy.get(this.continueBtn).first().click()
    }
    
}
export default HomePage