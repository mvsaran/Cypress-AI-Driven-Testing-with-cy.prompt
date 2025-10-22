describe('Prompt Testing - IMDB Search', () => {
  it('searches for a movie and verifies results', () => {
    cy.prompt([
      'visit https://www.imdb.com/',
      'type Inception in the search box',
      'press Enter on the search box',
      'wait for the search results to load',
      'verify that Inception appears in the search results',
      'click on the Inception movie link',
      'verify that the movie details page is displayed'
    ])
  })
})
