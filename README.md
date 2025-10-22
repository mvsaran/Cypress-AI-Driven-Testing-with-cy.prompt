# 🤖 Cypress AI-Driven Testing with cy.prompt

> Supercharge your test automation with AI-powered testing capabilities using Cypress' experimental prompt feature.

[![Cypress](https://img.shields.io/badge/Cypress-69D3A7?style=for-the-badge&logo=cypress&logoColor=white)](https://cypress.io)
[![AI Powered](https://img.shields.io/badge/AI-Powered-blueviolet?style=for-the-badge&logo=openai)](https://cypress.io)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

---

## 🎯 What is cy.prompt?

`cy.prompt` is Cypress' experimental feature that brings **AI intelligence** into your test automation workflow. Write natural language commands and let AI execute complex test scenarios automatically!

> 📖 **Official Documentation**: [cy.prompt() Command Reference](https://docs.cypress.io/api/commands/prompt?utm_source=blog&utm_medium=cypress-15-announcement&utm_content=cy-prompt-feature)

---

## ✨ Key Benefits

| Feature | Description | Impact |
|---------|-------------|--------|
| 🧠 **AI-Powered** | Dynamic test generation based on AI responses | Smarter Tests |
| 🎯 **Enhanced Coverage** | Better edge case detection & exploration | Comprehensive Testing |
| 🔧 **Self-Healing** | Reduced brittleness & easier maintenance | Save Time |
| ⚡ **Lightning Fast** | Automated decision making & faster creation | Boost Productivity |

---

## 📦 Prerequisites

Before you begin, ensure you have:

- ✅ Node.js (v14 or higher)
- ✅ Cypress installed
- ✅ Cypress Cloud account

```bash
npm install cypress --save-dev
```

---

## 🚀 Quick Start Guide

### 🔐 Step 1: Sign Up for Cypress Cloud

1. 🌐 Visit [Cypress Cloud](https://cloud.cypress.io)
2. 📝 Create an account or sign in
3. ➕ Create a new project
4. 🔑 Copy your **Project ID** and **Record Key**

### ⚙️ Step 2: Configure Your Project

Update your `cypress.config.js`:

```javascript
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalPromptCommand: true, // 🤖 Enable AI-powered cy.prompt
    projectId: 'your-project-id-here', // 🔑 Your Cypress Cloud Project ID
  },
})
```

### 📝 Step 3: Create Your First AI-Driven Test

Here's a **real-world example** testing a complete e-commerce checkout flow:

```javascript
describe('🛒 Checkout Testing', () => {
  it('🎯 Complete End-to-End Checkout Process', () => {
    cy.prompt([
      '🌐 visit https://www.saucedemo.com/v1/',
      '👤 type standard_user in username field',
      '🔒 type secret_sauce in password field',
      '🔘 click on login button',
      '✅ verify that the products page is displayed',
      '🎒 add Sauce Labs Backpack to the cart',
      '👕 add Sauce Labs Bolt T-Shirt to the cart',
      '🛒 click on the cart icon',
      '✅ verify that both items are present in the cart',
      '💳 click on the checkout button',
      '📝 type Avery in first name field',
      '📝 type Lopez in last name field',
      '📮 type 560001 in postal code field',
      '➡️ click on continue button',
      '✅ verify that the checkout overview page is displayed',
      '🏁 click on finish button',
      '🎉 verify that the message THANK YOU FOR YOUR ORDER is displayed'
    ])
  })
})
```

### 🎬 Step 4: Run Your Tests

Execute your AI-powered tests with recording:

```bash
npx cypress run --record --key your-record-key-here
```

Or run in interactive mode:

```bash
npx cypress open
```

---

## 💎 Best Practices

### 📐 Structured Prompts
- ✍️ Use clear, action-oriented language
- 🎯 Include verification steps
- 🔄 Think in user journey flows

### 🛡️ Error Handling
```javascript
cy.prompt([
  'navigate to login page',
  'enter valid credentials'
]).then((response) => {
  // Handle AI response
  if (response.success) {
    cy.log('✅ Login successful')
  } else {
    cy.log('❌ Login failed')
  }
})
```

### 🔐 Security First
- 🚫 Never include passwords in prompts
- 🔑 Use `Cypress.env()` for sensitive data
- 🛡️ Validate and sanitize all responses

### ⚡ Performance Tips
- 💾 Cache responses when possible
- 🎯 Use prompts strategically
- ⏱️ Implement proper timeouts

---

## 📚 More Examples

### 🔍 Simple Form Testing
```javascript
it('📝 Fill out contact form', () => {
  cy.prompt([
    'visit contact page',
    'fill in name field with John Doe',
    'fill in email with john@example.com',
    'click submit button',
    'verify success message appears'
  ])
})
```

### 🔐 Authentication Flow
```javascript
it('🔑 Test login flow', () => {
  cy.prompt([
    'navigate to login',
    'enter username',
    'enter password',
    'click login',
    'verify dashboard is visible'
  ])
})
```

---

## 🎨 Project Structure

```
cypress-ai-testing/
├── 📁 cypress/
│   ├── 📁 e2e/
│   │   └── 🧪 checkout.cy.js
│   ├── 📁 fixtures/
│   └── 📁 support/
├── ⚙️ cypress.config.js
├── 📦 package.json
└── 📖 README.md
```

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. 🍴 Fork the repository
2. 🌿 Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit your changes (`git commit -m '✨ Add some AmazingFeature'`)
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`)
5. 🔃 Open a Pull Request

---

## ⚠️ Important Notes

> ⚡ **Experimental Feature**: `cy.prompt` is currently experimental and may change in future releases.

- 🔄 Keep Cypress updated to the latest version
- 🔐 Store your Record Key securely (use `.env` files)
- 📊 Monitor test runs in Cypress Cloud Dashboard
- 🧪 Always test prompts in isolation first

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| ❌ cy.prompt not recognized | ✅ Enable `experimentalPromptCommand: true` |
| 🔌 Connection failed | ✅ Verify Project ID and Record Key |
| ⏱️ Tests timing out | ✅ Increase default timeout values |
| 🎯 Commands not executing | ✅ Check prompt syntax and clarity |

### 📞 Need Help?

- 📖 [Cypress Documentation](https://docs.cypress.io)
- 🤖 [cy.prompt Official Documentation](https://docs.cypress.io/api/commands/prompt?utm_source=blog&utm_medium=cypress-15-announcement&utm_content=cy-prompt-feature)
- ☁️ [Cypress Cloud](https://cloud.cypress.io)
- 💬 [Cypress Discord Community](https://discord.com/invite/cypress)
- 📚 [Best Practices Guide](https://docs.cypress.io/guides/references/best-practices)

---

## 📈 What's Next?

- [ ] 🎯 Add more complex test scenarios
- [ ] 🔄 Implement retry logic for flaky tests
- [ ] 📊 Create custom reporting dashboards
- [ ] 🤖 Explore advanced AI capabilities
- [ ] 🌐 Test across multiple browsers

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🌟 Show Your Support

If this project helped you, give it a ⭐️ and share it with others!

<div align="center">

**Made with ❤️ by the Testing Community**

[![Follow](https://img.shields.io/badge/Follow-GitHub-black?style=for-the-badge&logo=github)](https://github.com)
[![Star](https://img.shields.io/badge/Star-Project-yellow?style=for-the-badge&logo=github)](https://github.com)

</div>

---

## 👨‍💻 Author

**Saran Kumar**

---

<div align="center">

### 🚀 Happy Testing! 🤖

*Automate smarter, not harder with AI-powered testing*

</div>
