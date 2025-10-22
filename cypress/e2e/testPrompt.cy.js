describe('Prompt Testing', () => {
  it('passes with a valid prompt', () => {
    cy.prompt([
      'visit https://www.saucedemo.com/v1/',
      'type standard_user in username',
      'type secret_sauce in password',
      'click on login button',
      'verify that the products page is displayed'
    ])
      
  })
})