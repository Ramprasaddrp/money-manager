const TransactionItem = props => {
  const {transactionDetails, removeTransaction} = props
  const deleteTransaction = () => {
    removeTransaction(transactionDetails)
  }
  return (
    <li className="list-item">
      <p className="table-cell">{transactionDetails.title}</p>
      <p className="table-cell">{transactionDetails.amount}</p>
      <p className="table-cell">{transactionDetails.type}</p>
      <button
        data-testid="delete"
        onClick={deleteTransaction}
        className="delete-button"
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default TransactionItem
