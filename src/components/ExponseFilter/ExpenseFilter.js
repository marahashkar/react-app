import './ExpenseFilter.css';

const ExpenseFilter = (props) => {
   const selectedYear=(event)=>{
       props.onFilterExpense(event.target.value)
   }
    return (<div className='filterSection'>
        <select value={props.selected} onChange={selectedYear}>
            <option>All years</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
            <option>2020</option>

        </select>
    </div>)
}
export default ExpenseFilter;