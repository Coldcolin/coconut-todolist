import './App.css'
import Button from './components/button/button'
import Input from './components/input/Input'
import TodoItems from './components/todo-items/todo-items'
import Completed from './components/completed/completed'
import { useState, useReducer } from 'react'
import Colors from './components/colors/colors'

const theTodos=[]

const reducer =(state, action)=>{
  if(action.type === "ADD_TODO"){
    return [...state, action.payload]
  }
  if(action.type === "EDIT_TODO"){
    return state.map(todo => 
      todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo
    )
  }
  if(action.type === "SAVE_TODO"){
    return state.map(todo => 
      todo.id === action.payload.id ? {...todo, onEdit: false} : todo
    )
  }
  if(action.type === "TO_EDIT"){
    return state.map(todo => 
      todo.id === action.payload.id ? {...todo, onEdit: true} : todo
    )
  }
  if(action.type === "TOGGLE_TODO"){
    return state.map(todo => 
      todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo
    )
  }
  if(action.type === "DELETE_TODO"){
    return state.filter(todo => todo.id !== action.payload.id)
  }
  return state;
}

function App() {
  const [capital, dispatch] = useReducer(reducer, theTodos);
  const [inputText, setInputText] = useState("");
  const [colorState, setColorState] = useState("");

  
  const addTodos=()=>{
    dispatch({type: "ADD_TODO", payload: {id: capital.length + 1, text: inputText, onEdit: false, completed: false, color: colorState}});
    setInputText("") 
  }

  const editTodos=(id, text)=>{
    dispatch({type: "EDIT_TODO", payload: {id, text}});
  }

  const onSave=(id)=>{
    dispatch({type: "SAVE_TODO", payload: {id}});

  }
  
  const toEdit=(id)=>{
    dispatch({type: "TO_EDIT", payload: {id}})
  }
  

  const changeStatus=(id)=>{
    dispatch({type: "TOGGLE_TODO", payload: {id}});
  }

  const deleteTodo=(id)=>{
    dispatch({type: "DELETE_TODO", payload: {id}})
  }
  console.log(capital, colorState)
  return (
    <div style={{display: "flex", alignItems: "center", gap: 20, padding: 20}}>
      <div className='todo-app'>
        <h3>To-Do List</h3>
        <div className='todo-form'>
          <Input setInputText={setInputText} inputText={inputText}/>
          <Button style={{backgroundColor: "#000",
              color: "white",
              border: "none",
              paddingBlock: 10,
              paddingInline: 20,
              borderRadius: 4,
              cursor: "pointer"}}
               action={addTodos}>Add</Button>
        </div>
        <Colors setColorState={setColorState}/>
        <div className='todo-list-holder'>
          {
            capital.map((e)=>(
              e.completed === false ?
              <TodoItems key={e.id} info={e} toEdit={toEdit} editTodos={editTodos} onSave={onSave} changeStatus={changeStatus} deleteTodo={deleteTodo}/>: null
            ))
          }
        </div>
       </div> 
       <Completed>
        {
            capital.map((e)=>(
              e.completed === true ?
              <TodoItems key={e.id} info={e} toEdit={toEdit} editTodos={editTodos} onSave={onSave} changeStatus={changeStatus} deleteTodo={deleteTodo}/>: null
            ))
          }
       </Completed>
       
    </div>
  )
}

export default App
