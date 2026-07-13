class LoginPage {

    visit(): void {
        cy.visit('/');
    }

    enterUsername(username: string): void {
        cy.get('[data-test="username"]').type(username);
    }

    enterPassword(password: string): void {
        cy.get('[data-test="password"]').type(password);
    }

    clickLogin(): void {
        cy.get('[data-test="login-button"]').click();
    }

    login(username: string, password: string): void {
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }
p
    getErrorMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test="error"]');
    }
}

export default new LoginPage();