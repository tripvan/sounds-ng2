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

  const firstAlbumTitleCssClass = ':nth-child(1) > .listitem > div.truncate > .listitem-large';
  cy.get(firstAlbumTitleCssClass)
    .should('contain', 'Cocoa Sugar');
});

it('loads album with no images', () => {
  cy.server();
  cy.route('GET',
  '**/spotify/search*',
  'fixture:album-no-images.json').as('getAlbums');

  cy.visit('/search?query=fat freddy&label=&year=&sortOrder=1&sortDirection=1');

  cy.wait('@getAlbums')
  .its('url').should('include', 'query=fat freddy');

  cy.get('.search-text')
    .should('contain', 'fat freddy');

  const firstAlbumTitleCssClass = ':nth-child(1) > .listitem > div.truncate > .listitem-large';
  cy.get(firstAlbumTitleCssClass)
    .should('contain', 'Fanfarras de Ópio');
});