describe('Filters', () => {
  describe('term', () => {
    beforeEach(() => {
      cy.visit('/');
    });

    it('no results with < 3 characters', () => {
      cy.get('[data-test="term"]').type('ab');

      cy.get('[data-test="album-results"]')
        .should('not.be.visible');
    });

    it('results with 3 characters', () => {
      cy.server();
      cy.route('GET',
      '**/spotify/search*',
      'fixture:album-no-images.json').as('getAlbums');

      cy.get('[data-test="term"]').type('abc');

      cy.wait('@getAlbums')
      .its('url').should('include', 'query=abc');

      cy.get('[data-test="album-results"]')
        .should('be.visible');
    });

    it('handles empty response', () => {
      cy.server();
      cy.route('GET',
      '**/spotify/search*',
      'fixture:album-empty.json').as('getAlbums');

      cy.get('[data-test="term"]').type('sdkfgjsh');

      cy.wait('@getAlbums');

      cy.get('[data-test="no-results"]')
        .should('not.have.attr', 'style', 'opacity: 0;');
    });

    it('handles response then empty response', () => {
      cy.server();
      cy.route('GET',
      '**/spotify/search?query=fat freddy&label=&year=&offset=0&limit=50',
      'fixture:album-no-images.json').as('getAlbums');

      cy.get('[data-test="term"]').type('fat freddy');

      cy.wait('@getAlbums');

      cy.route('GET',
      '**/spotify/search?query=sdkfgjsh&label=&year=&offset=0&limit=50',
      'fixture:album-empty.json').as('getEmptyAlbums');

      cy.get('[data-test="term"]').clear();
      cy.get('[data-test="term"]').type('sdkfgjsh');

      cy.wait('@getEmptyAlbums');

      cy.get('[data-test="no-results"]')
        .should('not.have.attr', 'style', 'opacity: 0;');
    });

  });
});
