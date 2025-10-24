describe('Feature: ParaBank User Registration', () => {
  it('Scenario: Successful user registration with dynamic data', () => {
    cy.prompt(
      [
        'Given the user visits "https://parabank.parasoft.com/parabank/register.htm"',
        'When the user enters "{{firstName}}" in the "First Name" field',
        'And the user enters "{{lastName}}" in the "Last Name" field',
        'And the user enters "{{address}}" in the "Address" field',
        'And the user enters "{{city}}" in the "City" field',
        'And the user enters "{{state}}" in the "State" field',
        'And the user enters "{{zipCode}}" in the "Zip Code" field',
        'And the user enters "{{phone}}" in the "Phone #" field',
        'And the user enters "{{ssn}}" in the "SSN" field',
        'And the user enters "{{username}}" in the "Username" field',
        'And the user enters "{{password}}" in the "Password" field',
        'And the user enters "{{password}}" in the "Confirm" field',
        'And the user clicks the "REGISTER" button',
        'Then the page should contain the text "Your account was created successfully"',
        'And the page should contain the text "Welcome"'
      ],
      {
        placeholders: {
          firstName: Cypress.env('FIRST_NAME') || 'Avery',
          lastName: Cypress.env('LAST_NAME') || 'Lopez',
          address: Cypress.env('ADDRESS') || '123 Maple Street',
          city: Cypress.env('CITY') || 'Austin',
          state: Cypress.env('STATE') || 'TX',
          zipCode: Cypress.env('ZIP_CODE') || '73301',
          phone: Cypress.env('PHONE') || '5551234567',
          ssn: Cypress.env('SSN') || '123-45-6789',
          username:
            Cypress.env('USERNAME') || `user_${Math.random().toString(36).slice(2, 8)}`,
          password: Cypress.env('PASSWORD') || 'Secret123!',
        },
      }
    )
  })
})
