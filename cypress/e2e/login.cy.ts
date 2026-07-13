// LoginPage'i içeri aktarma kodu
import LoginPage from '../pages/LoginPage';

describe('Login Test Senaryoları', () => {

  // testten önce siteyi açma kodu
  beforeEach(() => {
    LoginPage.visit();
  });

  it('Senaryo 1: Başarılı Giriş', () => {
    cy.fixture('users').then((users) => {

      LoginPage.login(users.validUser.username, users.validUser.password);

      cy.url().should('include', 'inventory');
      cy.get('.inventory_item').should('have.length.greaterThan', 0);
      cy.get('.title').should('have.text', 'Products');
    });
  });

  it('Senaryo 2: Hatalı Kullanıcıyla Giriş', () => {
    cy.fixture('users').then((users) => {

      LoginPage.login(users.invalidUser.username, users.invalidUser.password);

      LoginPage.getErrorMessage().should('be.visible');
      cy.url().should('not.include', 'inventory');
    });
  });

});