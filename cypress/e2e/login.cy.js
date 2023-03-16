describe('login page', () => {
   beforeEach(() => {
      cy.visit('/');
   });

   it('login users', () => {
      cy.login('test@test.com', 'test');
      cy.contains('Добро пожаловать test@test.com').should('be.visible');
   });

   it('empty login. test fails', () => {
      cy.login(null, 'test');
      // cy.get('#mail').then((element) => {
      //   return element[0].checkValidity()
      // }).should('be.false');
      cy.get('#mail')
         .then(element => element[0].checkValidity())
         .should('be.false');
      cy.get('#mail')
         .then(element => element[0].validationMessage)
         .should('contains', 'Заполните это поле.');
   });
});
