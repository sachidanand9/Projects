import React from 'react'

const Todo = ({items,todoUpdate,todoDelete}) => {
  // console.log("todoComp -------->" ,items);
  console.log(items.lenght);
  if (items.length===0) {
    return <h1 className="noTask"> No Task Avalible !</h1>
    
  }
  else{ 
  return (
    <div id ="todoContainer">
       {items.map(({title,todo,id})=>{
        console.log(title, todo, id);
        return(
          <section id="todoWrapper" key={id}>
            <h1>{title}</h1>
            <p title={todo}>{todo.slice(0,35)}....</p>
            <div id="todoButton">
            <button onClick={()=>todoUpdate(id)}>Update</button>
            <button onClick={()=>todoDelete(id)}>Delete</button>
            </div>
          </section>
        )
       })}
    </div>
  )
}
}

export default Todo
