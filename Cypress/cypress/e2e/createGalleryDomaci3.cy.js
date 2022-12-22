import { homePage } from "../pageObjects/homePage"
import{loginPage} from "../pageObjects/loginPage"
import{createGalleryPage} from "../pageObjects/createGalleryPage"
import { faker } from "@faker-js/faker"
describe ('Create gallery tests', ()=>{
    beforeEach( () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
    })
    it ('Visit default URL and log in with valid credentials', ()=>{
        cy.visit ('https://gallery-app.vivifyideas.com/login')
        loginPage.login ('saruman@isengard.com','SauronNo1')
    })
    it ('Create gallery', ()=>{
        cy.visit ('https://gallery-app.vivifyideas.com/login')
        loginPage.login ('saruman@isengard.com','SauronNo1')
        createGalleryPage.createBtn.click()
        createGalleryPage.create ('Naziv', 'Opis','https://media.timeout.com/images/105240237/image.jpg')

    })})