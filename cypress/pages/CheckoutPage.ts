class CheckoutPage {

    fillCheckoutForm(firstName: string, lastName: string, postalCode: string): void {
        // PDF Kural 10.1: XPath yerine kesinlikle data-test attribute'ları tercih edilmiştir.
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
    }

    clickContinue(): void {
        cy.get('[data-test="continue"]').click();
    }

    clickFinish(): void {
        cy.get('[data-test="finish"]').click();
    }

    // Siparişin başarı mesajını kontrol eder, return ile test dosyasına atıyoruz ki assertion'ını kendi yapsın
    getSuccessMessage(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('[data-test="complete-header"]');
    }
}
export default new CheckoutPage();