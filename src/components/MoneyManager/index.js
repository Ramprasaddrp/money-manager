import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    amount: 0,
    expenses: 0,
    titleInput: '',
    amountInput: '',
    transactionList: [],
    selectType: 'INCOME',
  }

  removeTransaction = details => {
    const {transactionList} = this.state
    const filteredList = transactionList.filter(
      eachTransaction => details.id !== eachTransaction.id,
    )
    this.setState({transactionList: filteredList})
    if (details.type === 'INCOME') {
      this.setState(prevState => ({amount: prevState.amount - details.amount}))
    } else {
      this.setState(prevState => ({
        expenses: prevState.expenses - details.amount,
      }))
    }
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, selectType} = this.state
    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: amountInput,
      type: selectType,
    }
    if (titleInput !== '' && amountInput !== '') {
      if (selectType === 'INCOME') {
        this.setState(prevState => ({amount: prevState.amount + amountInput}))
      } else {
        this.setState(prevState => ({
          expenses: prevState.expenses + amountInput,
        }))
      }
      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, newTransaction],
        titleInput: '',
        amountInput: '',
        selectType: 'INCOME',
      }))
    }
  }

  onChangeAmount = event => {
    this.setState({amountInput: parseInt(event.target.value)})
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeType = event => {
    this.setState({selectType: event.target.value})
  }

  render() {
    const {
      amount,
      expenses,
      titleInput,
      amountInput,
      transactionList,
    } = this.state
    return (
      <div className="bg-container">
        <div className="responsive-container">
          <div className="profile-container">
            <h1 className="profile-name">Hi, Ram Prasad</h1>
            <p className="profile-description">
              Welcome back to your
              <span className="special-text"> Money Manager</span>
            </p>
          </div>
          <MoneyDetails amount={amount} expenses={expenses} />
          <div className="transaction-container">
            <div className="transaction-input-container">
              <h1 className="t-heading">Add Transaction</h1>
              <form
                className="transaction-form-container"
                onSubmit={this.onAddTransaction}
              >
                <label htmlFor="inputTitle" className="label-text">
                  TITLE
                </label>
                <input
                  value={titleInput}
                  id="inputTitle"
                  onChange={this.onChangeTitle}
                  className="input"
                  placeholder="Title"
                />
                <label htmlFor="inputAmount" className="label-text">
                  AMOUNT
                </label>
                <input
                  className="input"
                  id="inputAmount"
                  value={amountInput}
                  onChange={this.onChangeAmount}
                  placeholder="Amount"
                />
                <label htmlFor="selectId" className="label-text">
                  Type
                </label>
                <select id="selectId" onChange={this.onChangeType}>
                  {transactionTypeOptions.map(eachItem => (
                    <option
                      key={eachItem.optionId}
                      className="select-list-item"
                      value={eachItem.optionId}
                    >
                      {eachItem.displayText}
                    </option>
                  ))}
                </select>
                <button type="submit" className="button">
                  Add
                </button>
              </form>
            </div>
            <div className="transaction-history-container">
              <h1 className="t-heading">History</h1>
              <div className="table-header">
                <p className="table-header-cell">Title</p>
                <p className="table-header-cell">Amount</p>
                <p className="table-header-cell">Type</p>
              </div>
              <ul className="contacts-table">
                {transactionList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionDetails={eachTransaction}
                    removeTransaction={this.removeTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
