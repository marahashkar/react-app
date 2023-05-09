import { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/newExpense/newExpense';
function App() {
  const enitialExpenses=[
    {id:'1',title:'Paper',amount:'20',date:new Date(2020,4,10)},
    { id: '2',title: 'Car', amount: '30', date: new Date(2021, 5, 11) },
    { id: '3', title: 'Book', amount: '40', date: new Date(2022, 2, 6) },
    { id: '4', title: 'Paper2', amount: '50', date: new Date(2020, 2, 1) }
  ];
  const [expenses, setExpenses] = useState(enitialExpenses)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses]
    });
    // setExpense([...expenses, expense])

  }
  const deleteExpenseHandler=(expenseId)=>{
    let newexpenss=expenses.filter(element=>{
      return element.id !== expenseId
    })
    setExpenses(newexpenss)


  }
  return (
    <div className="App">
      <NewExpense onAddNewExpense={addExpenseHandler} ></NewExpense>

      <Expenses items={expenses} onDeletefromList={deleteExpenseHandler}></Expenses>
    </div>
  );
}

export default App;
