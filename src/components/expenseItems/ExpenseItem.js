
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';
import Card from '../Card/Card';
 const ExpenseItem =(props)=> {
    const title = props.title;
    const amo = props.amount;
    const id=props.id
//  const [title,setTitle]=useState(props.title);

     const clickDelete = ()=>{
        props.onDelete(id)
    }
    return (
      <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date}></ExpenseDate>
                <div className='expense-item_description'>
                    <h2>{title}</h2>
                    <div className='expense-item_price'>${amo}</div>
                </div>
                <button onClick={clickDelete}>delete</button>
            </Card>
      </li>

    )
}
export default ExpenseItem