// Write your code here
const MoneyDetails = props => {
  const {amount, expenses} = props
  return (
    <div>
      <div className="balance-container bg-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">{amount - expenses}</p>
        </div>
      </div>
      <div className="balance-container bg-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">{amount}</p>
        </div>
      </div>
      <div className="balance-container bg-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">{expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
