import './index.css';

const MoneyDetails = props => {
    const {balanceAmount,incomeAmount,expensesAmount} = props 
    return(
        <>
        <div className="money-details-container">
            <div className="balance-container">
                <img 
                src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png "
                className="details-img"
                alt="balance"/>
                <div>
                    <p className="details-txt">Your Balance</p>
                    <p className="details-money">Rs {balanceAmount}</p>
                </div>
            </div>
            <div className="income-container">
                <img
                src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
                className="details-img"
                alt="income"/>
                <div>
                    <p className="details-txt">Your Income</p>
                    <p className="details-money">Rs {incomeAmount}</p>
                </div>
            </div>
            <div className="expenses-container">
                <img 
                src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
                className="details-img"
                alt="expenses"
                />
                <div>
                    <p className="details-txt">Your Expenses</p>
                    <p className="details-money">Rs {expensesAmount}</p>
                </div>

            </div>
        </div>
        </>
    )
}
export default MoneyDetails;