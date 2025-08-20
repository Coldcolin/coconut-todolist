import React from 'react'

const Completed = ({children}) => {
    
  return (
    <div className='todo-list-holder' style={{minWidth: 500, padding: 20, border: "1px solid #ccc", borderRadius: 8}}>
        <h4 style={{color: "grey"}}>Completed Tasks</h4>
          {children || <h4 style={{color:"black"}}>No completed tasks</h4>}
        </div>
  )
}

export default Completed