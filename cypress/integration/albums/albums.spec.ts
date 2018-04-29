describe('Albums', () => {
  it('with no images', () => {
    cy.server();
    cy.route('GET',
    '**/spotify/search*',
    'fixture:album-no-images.json').as('getAlbums');

    cy.visit('/search?query=fat freddy&label=&year=&sortOrder=1&sortDirection=1');

    cy.wait('@getAlbums')
    .its('url').should('include', 'query=fat freddy');

    cy.get('.search-text')
      .should('contain', 'fat freddy');

    const firstAlbumTitleCssClass = ':nth-child(1) > [data-test="album"] > div.truncate > .listitem-large';
    cy.get(firstAlbumTitleCssClass)
      .should('contain', 'Fanfarras de Ópio');
  });
});