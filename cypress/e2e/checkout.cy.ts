import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('Satın Alma İşlemleri Test Senaryosu', () => {

    beforeEach(() => {
        LoginPage.visit();
        cy.fixture('users').then((users) => {
            LoginPage.login(users.validUser.username, users.validUser.password);
        });
    });

    it('should complete the purchase journey successfully for a valid user', () => {

        InventoryPage.addItemToCart('Sauce Labs Backpack');

        InventoryPage.goToCart();

        CartPage.clickCheckout();

        CheckoutPage.fillCheckoutForm('Test', 'User', '34000');

        CheckoutPage.clickContinue();

        cy.url().should('include', '/checkout-step-two');

        CheckoutPage.clickFinish();

        CheckoutPage.getSuccessMessage().should('be.visible');

        CheckoutPage.getSuccessMessage().should('have.text', 'Thank you for your order!');
    });

});