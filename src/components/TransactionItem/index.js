import './index.css'

const TransactionItem = props => {
    const{transactionDetails,deleteTransaction} = props 
    const {id,title,amount,type} = transactionDetails

    const onDeleteTransaction = () => {
        deleteTransaction(id)
    }

    return(
        <>
        <li className="table-row">
            <p className="transaction-txt">{title}</p>
            <p className="transaction-txt">{amount}</p>
            <p className="transaction-txt">{type}</p>
            <div className="delete-container">
                <button type="button" className='delete-button' onClick={onDeleteTransaction}>
                    <img
                    src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
                    className="delete-img"
                    alt="delete"
                    />
                </button>
                </div>
        </li>
        </>
    )
}
export default TransactionItem;