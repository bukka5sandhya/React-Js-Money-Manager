In this project, let's build a Money Manager app by applying the concepts we have learned till now.

Refer to the image below:

![image](https://github.com/bukka5sandhya/React-Js-Money-Manager/assets/133884532/1e394740-eda5-49e6-90cf-41aa3e7f0b27)

https://assetas.ccbp.in/frontend/content/react-js/money-manager-output.gif

Design Files

Click to view

Extra Small (Size < 576px) and Small (Size >= 576px)

Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)

Set Up Instructions

Click to view

Download dependencies by running npm install

Start up the app using npm start

Completion Instructions

Functionality to be added

The app must have the following functionalities

Initially, Balance Amount, Income Amount, and Expenses Amount should be 0

Balance Amount should be calculated by removing the Expenses Amount from the Income Amount in the list of transactions

Income Amount should be calculated by removing the Expenses Amount in the list of transactions

Expenses Amount should be calculated by adding only Expenses Amount in the list of transactions

The MoneyManager component is provided with transactionTypeOptions. It consists of a list of transaction type objects with the following properties in each object

Key	Data Type

optionId	String

displayText	String

Initially, the value of the titleInput should be empty

Initially, the value of the amountInput should be empty

Initially, the first option in the list should be selected

When a transaction is added, by providing the values in the titleInput, amountInput and optionId and Add button is clicked,

A new transaction should be added to the transaction history list

totalBalance, totalIncome and totalExpenses should be updated accordingly

totalBalance = totalIncome - totalExpenses

After updating, the values in the titleInput,amountInput and optionId will be updated to their initial values

When the delete button in the transaction history is clicked,

The respective transaction should be deleted from the transaction history list

totalBalance, totalIncome and totalExpenses should be updated accordingly

Components Structure

![image](https://github.com/bukka5sandhya/React-Js-Money-Manager/assets/133884532/0777be14-030d-4f2a-93c5-d6754277cb93)

Implementation Files

Use these files to complete the implementation:

src/App.js

src/components/MoneyManager/index.js

src/components/MoneyManager/index.css

src/components/MoneyDetails/index.js

src/components/MoneyDetails/index.css

src/components/TransactionItem/index.js

src/components/TransactionItem/index.css
Important Note

Click to view

The following instructions are required for the tests to pass

The Balance Amount should have the data-testid as balanceAmount

The Income Amount should have the data-testid as incomeAmount

The Expenses Amount should have the data-testid as expensesAmount

The Delete button for each transaction should have the data-testid as delete
Resources

Image URLs

https://assets.ccbp.in/frontend/react-js/money-manager/money-manager-bg.png

https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png alt should be balance

https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png alt should be income

https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png alt should be expenses

https://assets.ccbp.in/frontend/react-js/money-manager/delete.png alt should be delete

Colors

Hex: #475569

Hex: #0b69ff

Hex: #ecfccb

Hex: #84cc16

Hex: #cffafe

Hex: #06b6d4

Hex: #ede9fe

Hex: #7c3aed

Hex: #cbd5e1

Hex: #7e858e

Hex: #ffffff

Hex: #1e293b

Hex: #d7dfe9

Hex: #334155

Font-families

Things to Keep in Mind

All components you implement should go in the src/components directory.

Don't change the component folder names as those are the files being imported into the tests.

Do not remove the pre-filled code

Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
