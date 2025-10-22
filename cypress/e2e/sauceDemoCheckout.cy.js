describe('Checkout Testing', () => {
  it('Checkout the Order', () => {
    cy.prompt([
      'visit https://www.saucedemo.com/v1/',
      'type standard_user in username field',
      'type secret_sauce in password field',
      'click on login button',
      'verify that the products page is displayed',
      'add Sauce Labs Backpack to the cart',
      'add Sauce Labs Bolt T-Shirt to the cart',
      'click on the cart icon',
      'verify that both items are present in the cart',
      'click on the checkout button',
      'type Avery in first name field',
      'type Lopez in last name field',
      'type 560001 in postal code field',
      'click on continue button',
      'verify that the checkout overview page is displayed',
      'click on finish button',
      'verify that the message THANK YOU FOR YOUR ORDER is displayed'
    ])
  })
})
