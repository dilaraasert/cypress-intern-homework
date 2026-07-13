class CartPage {

    // Sepetteki ürünün adını taşıyan kutuyu yakalar ve test dosyasına teslim eder.
    getCartItemName(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('.inventory_item_name');
    }

    removeItemFromCart(itemName: string): void {
        cy.contains('.cart_item', itemName).find('button').click();
    }

    clickCheckout(): void {
        cy.get('[data-test="checkout"]').click();
    }
}

export default new CartPage();