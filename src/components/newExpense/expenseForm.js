import { useState } from 'react';
import './newExpense.css'
const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    //second+third way
    //    const [userInput,setUserInput]=useState({
    //        title:'',
    //        amount:'',
    //        date:''
    //    });
    const titleChangeHandler = (event) => {
        ///first way
        setTitle(event.target.value)
        ///second way
        // setUserInput({
        //     ...userInput,
        //     title: event.target.value
        // });

        //third way
        // setUserInput((prevState)=>{
        //     return { ...prevState,
        //     title: event.target.value}
        // })
    };
    const amountChangeHandler = (event) => {
        setAmount(event.target.value)

        // setUserInput({
        //     ...userInput,
        //     amount: event.target.value
        // })
    };
    const dateChangeHandler = (event) => {
        // setUserInput({
        setDate(event.target.value)

        //     ...userInput,
        //     date: event.target.value
        // })
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            id: Math.random().toString(),
            title: title,
            amount: amount,
            date: new Date(date)
        }
        props.onSaveExpenseData(expenseData)
        setTitle('');
        setAmount('');
        setDate('');
    }
    const clearHandler = () => {
        setTitle('');
        setAmount('');
        setDate('');

    }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense_controls'>
                <div className='new-expense_control'>
                    <label>Title</label>
                    <input type='text' value={title} onChange={titleChangeHandler} />

                </div>
                <div className='new-expense_control'>
                    <label>Amount</label>
                    <input type='number' min="0.01" step="0.01" value={amount} onChange={amountChangeHandler} />

                </div>
                <div className='new-expense_control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2023-12-31" value={date} onChange={dateChangeHandler} />

                </div>
                <div className='new-expense_actions'>
                    <button type='submit'> Add Expenses</button>
                    <button type='button' onClick={clearHandler}> clear Form</button>
                </div>
            </div>
        </form>)
};
export default ExpenseForm