class CreateGalleryPage {
    get titleIn() {
        return cy.get('#title')
    }
    get descriptionIn() {
        return cy.get("#description")
    }
    get imageUrl() {
        return cy.get('input[type=url]')
    }
    get createBtn() {
        return cy.get('.mr-auto > :nth-child(3) > .nav-link')
    }
    get cancelBtn() {
        return cy.get('form > :nth-child(5)')
    }
    get pageTitle() {
        return cy.get('h1')
    }
    get errorAlert() {
        return cy.get('p[class="alert alert-danger"]')
    }
    create(title, description, url) {
        this.titleIn.type(title)
        this.descriptionIn.type(description)
        this.imageUrl.type(url)
        this.createBtn.click()
    }
}
export const createGalleryPage = new CreateGalleryPage()