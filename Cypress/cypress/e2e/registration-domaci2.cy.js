const locators = require("../fixtures/locators.json")
const {faker} = require('@faker-js/faker')
var userPass = faker.internet.password ()
let sviNum = faker.random.numeric (15)
describe ('Register testing', () => {
    it('Visit Gallery', () => {
        cy.visit('/')
    })
    it('Go to Register', () => {
        cy.visit("/")
        cy.get(locators.registration.regBtn).eq(2).click()
    })
    it('Register', () => {
        cy.visit('/')
        cy.get(locators.registration.regBtn).eq(2).click()
        cy.get(locators.registration.firstName).type(faker.name.firstName())
        cy.get(locators.registration.lastName).type(faker.name.lastName())
        cy.get(locators.registration.email).type(faker.internet.email())
        cy.get(locators.registration.password).type(userPass)
        cy.get(locators.registration.passwordConfirmation).type(userPass)
        cy.get(locators.registration.acceptCheckBox).click()
        cy.get('.btn').click()
    })
    it ("First name in numbers", () => {
        cy.visit('/')
        cy.get(locators.registration.regBtn).eq(2).click()
        cy.get(locators.registration.firstName).type(faker.random.numeric(9))
        cy.get(locators.registration.lastName).type(faker.name.lastName())
        cy.get(locators.registration.email).type(faker.internet.email())
        cy.get(locators.registration.password).type(userPass)
        cy.get(locators.registration.passwordConfirmation).type(userPass)
        cy.get(locators.registration.acceptCheckBox).click()
        cy.get('.btn').click()
    })
    it ("Password all numbers", () => {
        cy.visit('/')
        cy.get(locators.registration.regBtn).eq(2).click()
        cy.get(locators.registration.firstName).type(faker.name.firstName())
        cy.get(locators.registration.lastName).type(faker.name.lastName())
        cy.get(locators.registration.email).type(faker.internet.email())
        cy.get(locators.registration.password).type(sviNum)
        cy.get(locators.registration.passwordConfirmation).type(sviNum)
        cy.get(locators.registration.acceptCheckBox).click()
        cy.get('.btn').click()
    })
    it ("Last name in letters and numbers", () => {
        cy.visit('/')
        cy.get(locators.registration.regBtn).eq(2).click()
        cy.get(locators.registration.firstName).type(faker.name.firstName ())
        cy.get(locators.registration.lastName).type(faker.finance.iban ())
        cy.get(locators.registration.email).type(faker.internet.email())
        cy.get(locators.registration.password).type(userPass)
        cy.get(locators.registration.passwordConfirmation).type(userPass)
        cy.get(locators.registration.acceptCheckBox).click()
        cy.get('.btn').click()
    })
})
afterEach(() => {
    cy.clearCookies()
})