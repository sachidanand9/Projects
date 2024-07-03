import toast, { Toaster } from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';
import Forms from "./components/Form/Forms";
import Todo from "./components/ToDo/Todo";
import "./global.css";
import { useState } from "react";
function App() {
  let [state, setState] = useState({
    title: "",
    todo: "",
    id: uuidv4(),
    items: [],
  })
  // console.log(uuidv4); // generates unique ID 
  let formHandle = (e) => {
    console.log(e.target.value);
    // setState(e.target.value)
    let { name, value } = e.target;
    setState({ ...state, [name]: value })
  };

  let handelSubmit = (e) => {
    e.preventDefault();
    // toast.success("Taask Added")
    console.log(state);
    try {

      let newItem = {
        title: state.title,
        todo: state.todo,
        id: uuidv4(),
      };
      let updatedItems = [...state.items, newItem]
      // console.log(updatedItems);
      
      if (state.title !== "" && state.todo !== "") {
        toast.success("Task Added");
      setState({
        items:updatedItems,
        id:uuidv4(),
        title:"",
        todo:"",
      });
    }
    else{
      toast.error("Task Empty");
    }
  
    } catch {
      console.log("error");
    }
  }
let todoUpdate =(id)=>{
  console.log("update",id);
  let staticItems = state.items.filter((obj)=>{
    return obj.id !== id;
  });
  console.log(staticItems);
  let updateTodo = state.items.find((obj)=>{
    return obj.id == id;
  });
  console.log(updateTodo);
  
  setState({
    items: staticItems,
    title : updateTodo.title,
    todo: updateTodo.todo,
    id: updateTodo.id,
  })
}
let todoDelete=(id)=>{
  console.log("delete",id);
  let staticItems = state.items.filter((obj)=>{
    return obj.id !== id;
  });
  console.log(staticItems);
  // let deleteTodo = state.items.find((obj)=>{
  //   return obj.id == id;
  // });
  // console.log(deleteTodo);
  setState ({
    items:staticItems,
    title:"",
    todo:"",
    // id:deleteTodo.id,

  })

}
  return (
    <main id="mainWrapper">
      <Toaster position="top-center" />
      <article>
        <header>
          <h1> Todo Lists </h1>
        </header>
        <section>
          <Forms title={state.title} todo={state.todo} formHandle={formHandle} handelSubmit={handelSubmit}></Forms>
          <Todo items ={state.items} todoUpdate={todoUpdate} todoDelete={todoDelete}/>
        </section>
      </article>
    </main>
  )
}

export default App