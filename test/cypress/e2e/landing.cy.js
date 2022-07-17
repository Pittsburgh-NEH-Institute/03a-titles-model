/* global cy */
describe('The landing page', function () {
  it.skip ('should load ', function () {
    cy.visit('/exist/apps/03a-titles-model/index.html')
      .get('.alert')
      .contains('app.xqm')
  })

})
