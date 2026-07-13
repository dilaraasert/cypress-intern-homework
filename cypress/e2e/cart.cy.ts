// kullanılacak sayfaları içeri çağırdık
import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';

describe('Sepet İşlemleri Test Senaryosu', () => {

    beforeEach(() => {
        LoginPage.visit();
        cy.fixture('users').then((users) => {
            LoginPage.login(users.validUser.username, users.validUser.password);
        });
    });

    it('should add product to cart and verify in cart page successfully', () => {

        InventoryPage.addItemToCart('Sauce Labs Backpack');

        InventoryPage.getCartBadge().should('have.text', '1');

        InventoryPage.goToCart();

        CartPage.getCartItemName().should('be.visible');

        CartPage.getCartItemName().should('have.text', 'Sauce Labs Backpack');

        CartPage.getCartItemName().should('have.length', 1);
    });

});