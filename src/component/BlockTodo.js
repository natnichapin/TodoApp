// import { useRef } from "react"
import { useContext } from "react";
import TodoContext from "../store/Todolist";
function BlockTodo(props){
    const todoctx = useContext(TodoContext)
    // const TestRef = useRef([])
    const DoneFunction =(e)=>{
        console.log("----Done");
        console.log(todoctx.DoneList);
        console.log("----NotDone");

        todoctx.setStatusTodos(e.target.id)

     console.log("Done---");
     console.log(todoctx.DoneList);
     console.log("NotDone---");
     console.log(todoctx.NotDoneList);
    }

    return <div  id={props.id} className="flex flex-col bg-purple-950 text-yellow-50 m-2 border-2 border-purple-300  w-40 h-52  "> 
        
        <div className="text-2xl font-bold">{props.name}  </div>
        <div> {props.id} </div>
        <div> {props.description}</div>
        <div> {props.donestatus}</div>
        <button   id={props.id}  onClick={DoneFunction} className="w-3/5 m-auto  bg-black text-white rounded-xl hover:bg-slate-200  hover:text-purple-950  ">Done</button>
       
    </div>
}

export default BlockTodo 