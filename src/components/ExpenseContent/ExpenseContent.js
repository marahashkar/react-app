
import ExpenseItem from "../expenseItems/ExpenseItem"
import './ExpenseContent.css'
const ExpenseContent = (props) => {
    const DeleteItem=(item)=>{
        props.deleteExpenseItem(item)
    }
    if (props.expenseList.length === 0) {
        return <div>There is no Element</div>
    }
    return (
        <ul>
            {props.expenseList.map((expense, index) => (<ExpenseItem
                //  key={expense.id}
                key={index}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                id={expense.id} 
                onDelete={DeleteItem}/>))}
        </ul>
    )

}
export default ExpenseContent