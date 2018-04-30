describe('Filter by Label', () => {
  it('loads Ninja Tune label', () => {
    cy.server();
    cy.route('GET',
    '**/spotify/search*',
    'fixture:albumsearch.json').as('getAlbums');

    cy.visit('/');

    cy.contains('Labels').click();
    cy.contains('Ninja Tune').click();

    cy.wait('@getAlbums')
    .its('url').should('include', 'label=Ninja Tune');

    cy.get('.search-text')
      .should('contain', 'Ninja Tune');

    const firstAlbumTitleCssClass = ':nth-child(1) > [data-test="album"] > div.truncate > .listitem-large';
    cy.get(firstAlbumTitleCssClass)
      .should('contain', 'Cocoa Sugar');
      cy.get('[data-test="album"]')
      .should('have.have.length', 50);
  });
});
