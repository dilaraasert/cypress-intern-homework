class InventoryPage {
    // test dosyasında bunun görünür olup olmadığını kontrol etmek için kullanacağız
    getProductList(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('.inventory_list');
    }

    addItemToCart(itemName: string): void {
        cy.contains('.inventory_item', itemName).find('button').click();
    }

    goToCart(): void {
        cy.get('.shopping_cart_link').click();
    }

    // sepetteki ürün sayısını alabilmesi içi return kullandık
    getCartBadge(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('.shopping_cart_badge');
    }
}

export default new InventoryPage();