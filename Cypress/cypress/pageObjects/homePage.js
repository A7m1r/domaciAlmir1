class HomePage {
    get loginBtn() {
        return cy.get('.ml-auto > :nth-child(1) > .nav-link')
    }
    get logoutBtn() {
        return cy.get('.ml-auto > :nth-child(3) > .nav-link')
    }
    get registerBtn() {
        return cy.get("a[href='/register']")
    }
    get createGalleryBtn(){
        return cy.get('.mr-auto > :nth-child(3) > .nav-link')
    }
    clickLoginButton() {
        this.loginBtn.click()
    }
    clickLogoutButton() {
        this.logoutBtn.click()
    }
    clickRegisterButton() {
        this.registerBtn.click()
    }
    clickCreateGalleryBtn(){
        this.createGalleryBtn.click()
    }
}
export const homePage = new HomePage()