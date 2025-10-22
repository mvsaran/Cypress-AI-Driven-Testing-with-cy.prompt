describe('Wikipedia Search Flow', () => {
  it('should search for a topic and verify results', () => {
    // Step 1: Navigate and search
    cy.prompt([
      'Given I visit https://www.wikipedia.org/',
      'When I type Artificial intelligence in the search field',
      'And I press Enter on the search field'
    ])
    
    // Use traditional Cypress commands for verification
    cy.url().should('include', '/wiki/Artificial_intelligence')
    cy.get('h1').should('contain', 'Artificial intelligence')
  })
})