class Accessrestrictpage{
    // Locators
    verify_url='accessrestricted';
    banner='.hero-banner__hero-line';

    // Methods
    verifyAccessRestrictUrl(){
        cy.url().should('include',this.verify_url)
    }

    verifyBannerIsDisplayed(){
        cy.get(this.banner).should('be.visible')
    }

}
export default Accessrestrictpage