export class LoginPage { 
    
    openSignUp(){
        cy
            .get('[data-cy=login-menu]')
            .click()
        cy
            .contains('Sign up here')
            .click()
    }

    signUpAndLogin(){
        cy
            .get('[data-cy=signup-email]')
            .clear().type('example123@email.com') // requires different email address for each execution
        cy
            .get('[data-cy=signup-password]')
            .clear().type('1234')
        cy
            .get('[data-cy=signup]')
            .click()
    }
}