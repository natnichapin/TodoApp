// import { useRef } from "react"
import { useContext } from "react";
import TodoContext from "../store/Todolist";
function BlockTodo(props){
    const todoctx = useContext(TodoContext)
    const DoneFunction =(e)=>{
        todoctx.setStatusTodos(e.target.id)
    }
    return (
        <>
        {todoctx.Lists.filter((todo) => ((props.doneStatus === undefined) || todo.doneStatus === props.doneStatus)).map((todo) => 
            <div key={todo.id}  id={todo.id} className="flex flex-col bg-purple-950 text-yellow-50 m-2 border-2 border-purple-300  w-40 h-52  "> 
            <div className="text-2xl font-bold">{todo.name}  </div>
            <div> {todo.id} </div>
            <div> {todo.description}</div>
            <button  id={todo.id}  onClick={DoneFunction} className="w-3/5 m-auto  bg-black text-white rounded-xl hover:bg-slate-200  hover:text-purple-950  ">{todo.doneStatus ? "Done" : "Not Done"}</button> 
         </div>)}
         </>
    )
    
}

export default BlockTodo 