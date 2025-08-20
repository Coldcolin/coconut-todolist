import "./todo-items.css";
import Button from '../button/button';

const TodoItems = ({info, toEdit, editTodos, onSave, changeStatus, deleteTodo}) => {
  
  return (
    <div className='todo-items' style={{backgroundColor: `${info.color}`}}>
      <input type="checkbox" value={info.completed} className='todo-items-checkbox' onChange={()=> changeStatus(info.id)} />
      {info.onEdit? <input value={info.text} onChange={(e)=> editTodos(info.id, e.target.value) }/>:<p style={{color: "black"}}>{info.text}</p> }
        <div className="todo-items-buttons">
        <Button style={{backgroundColor: "tomato",
              color: "white",
              border: "none",
              paddingBlock: 10,
              paddingInline: 10,
              borderRadius: 4,
              cursor: "pointer"}} action={deleteTodo} id={info.id}>Delete</Button>
        <Button style={{backgroundColor: "#000",
              color: "white",
              border: "none",
              paddingBlock: 10,
              paddingInline: 10,
              borderRadius: 4,
              cursor: "pointer"}} action={info.onEdit? onSave:toEdit} id={info.id}>{info.onEdit? "Save": "Edit"}</Button>
        </div>
     </div> 
  )
}

export default TodoItems