import {LoginPage} from '../../support/pages/login_page'

const login = new LoginPage;

it('login test', function () {
        cy
                .visit('/') // Goto baseUrl located in cypress.json file
                login.openSignUp()
                login.signUpAndLogin()
})