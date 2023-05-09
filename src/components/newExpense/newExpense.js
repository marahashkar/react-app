

import './newExpense.css';
import ExpenseForm  from './expenseForm';
const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enterExpenseData)=>{
// const expenseData={
//     ...enterExpenseData,
// };
        props.onAddNewExpense(enterExpenseData)
    }
    return(<div className='new-expense'>
<ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </div>)
}
export default NewExpense