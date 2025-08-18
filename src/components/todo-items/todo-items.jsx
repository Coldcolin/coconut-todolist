import "./todo-items.css";
import Button from '../button/button';

const TodoItems = ({info, toEdit, editTodos, onSave}) => {
  return (
    <div className='todo-items'>
      {info.onEdit? <input value={info.text} onChange={(e)=> editTodos(info.id, e.target.value) }/>:<p>{info.text}</p> }
        <div className="todo-items-buttons">
        <Button style={{backgroundColor: "tomato",
              color: "white",
              border: "none",
              paddingBlock: 10,
              paddingInline: 10,
              borderRadius: 4,
              cursor: "pointer"}}>Delete</Button>
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