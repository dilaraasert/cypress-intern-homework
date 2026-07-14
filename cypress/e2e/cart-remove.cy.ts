import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';

describe('Sepetten Ürün Kaldırma Test Senaryosu', () => {

    beforeEach(() => {
        LoginPage.visit();
        cy.fixture('users').then((users) => {
            LoginPage.login(users.validUser.username, users.validUser.password);
        });
    });

    it('should add a product to the cart and then remove it successfully', () => {

        InventoryPage.addItemToCart('Sauce Labs Backpack');

        InventoryPage.getCartBadge().should('have.text', '1');

        InventoryPage.goToCart();

        CartPage.getCartItemName().should('be.visible');
        CartPage.getCartItemName().should('have.text', 'Sauce Labs Backpack');

        CartPage.getCartItemName().should('have.length', 1);

        CartPage.removeItemFromCart('Sauce Labs Backpack');

        // Ürünün artık ekranda bulunmadığını teyit eder
        CartPage.getCartItemName().should('not.exist');

        // Rozet elementinin ekrandan tamamen silindiğini kontrol ederek assertion yapıyoruz.
        InventoryPage.getCartBadge().should('not.exist');
    });

});