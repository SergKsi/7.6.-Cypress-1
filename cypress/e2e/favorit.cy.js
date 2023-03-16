describe('favorit test', () => {
   beforeEach(() => {
      cy.visit('/');
      cy.validlogin('test@test.com', 'test');
   });

   it('add book in favorit card image click', () => {
      cy.get('.card-img').click();
      cy.addbookinfavorit('Книга 1', 'Фантастика', 'Автор 1');
      cy.contains('Favorites').click();
      cy.contains('.card-title', 'Книга 1').should('be.visible');
   });

   it('del book from favorit', () => {
      cy.get('.card-img').click();
      cy.addbookinfavorit('Книга 2', 'Фантастика', 'Автор 2');
      cy.contains('Favorites').click();
      cy.contains('.card-title', 'Книга 1').should('be.visible');
      cy.get(
         '#root > div > div > a:nth-child(1) > div > div.card-footer > button'
      ).click();
      cy.contains('Favorites').click();
      cy.contains('.card-title', 'Книга 1').should('not.exist');
   });

   it('add book in favorit button click', () => {
      cy.get('.p-0 > .btn').click();
      cy.addbookinfavorit('Книга 1', 'Фантастика', 'Автор 1');
      cy.contains('Favorites').click();
      cy.contains('.card-title', 'Книга 1').should('be.visible');
   });

   it('add book. empty title', () => {
      cy.get('.card-img').click();
      cy.addbookinfavorit(null, 'Фантастика', 'Автор 1');
      cy.get('#title')
         .then(element => element[0].checkValidity())
         .should('be.false');
      cy.get('#title')
         .then(element => element[0].validationMessage)
         .should('contains', 'Заполните это поле.');
   });

   it('empty favorit list', () => {
      cy.contains('Favorites').click();
      cy.contains('Please add some book to favorit on home page!').should(
         'be.visible'
      );
   });
});
