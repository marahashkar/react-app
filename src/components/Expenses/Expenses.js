import Card from '../Card/Card';
import './Expenses.css';
import { useState } from 'react';
import ExpenseFilter from '../ExponseFilter/ExpenseFilter';
import ExpenseContent from '../ExpenseContent/ExpenseContent';
import ExpensesChart from '../ExpensesChart/ExpensesChart';
const Expenses = (props) => {
    const [filterdYear, setFilterdYear] = useState('All years')
    const onFilterExpenseHandler = (year) => {
        setFilterdYear(year)
    }
    const itemsByYear = props.items.filter((element) => {
        if (filterdYear !== 'All years') {
            return element.date.getFullYear().toString() === filterdYear
        }
        else return props.items
    })
    const deleteHandler=(item)=>{
        props.onDeletefromList(item)
    }
    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filterdYear} onFilterExpense={onFilterExpenseHandler}></ExpenseFilter>
            <ExpensesChart expenses={itemsByYear}/>
            <ExpenseContent expenseList={itemsByYear} deleteExpenseItem={deleteHandler} />

        </Card>
    )
}
export default Expenses