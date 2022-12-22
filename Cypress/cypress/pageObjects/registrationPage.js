class RegistrationPage {
    get firstNameInput(){
        return cy.get ('#first-name')
    }
    get lastNameInput(){
        return cy.get ('#last-name')
    }
    get emailInput(){
        return cy.get ('#email')
    }
    get passwordInput(){
        return cy.get ('#password')
    }
    get passwordConfirmationInput(){
        return cy.get ('#password-confirmation')
    }
    get acceptCheckBox(){
        return cy.get ('.form-check-input')
    }
    get submitBtn(){
        return cy.get ('.btn')
    }
    get regBtn(){
        return cy.get(':nth-child(2) > .nav-link')
    }
    clickAcceptCheckBtn (){
    this.acceptCheckBox.click()
    }
    clickRegBtn (){
        this.regBtn.click()        
    }
    clickSubmitBtn(){
        this.submitBtn.click()
    }
    registration(firstName,lastName,email,password,passwordConfirmation){
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.passwordInput.type(password)
        this.passwordConfirmationInput.type(passwordConfirmation)
    }
}
export const registrationPage = new RegistrationPage()