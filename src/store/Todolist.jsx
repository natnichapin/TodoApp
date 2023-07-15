import { createContext, useState  } from 'react'; 
import todoClass from '../composable/todoClass';

const TodoContext = createContext({
    Lists: [],
    addTodolist:(Name,description)=>{},
    removeTodolist:(id)=>{},
    setStatusTodos:(id)=>{}
    
})

export function TodoContextProvider(props){ 
    const [useTodos,setuseTodos] = useState([])

    function addTodolistFun(Name,description){
        let o = new todoClass(Name,description)
    setuseTodos((prevTodo)=>{
        
        //ถ้ามาสร้างใน set จะเบิ้ล 2
        //even add value already but if not return value this will be old value
        return [...prevTodo,o]
        })
    }
    function removeTodolistFun(id){
        console.log("removeTodolistFun " + id);
        console.log(id);
        setuseTodos((prevTodo)=>{
        return prevTodo.filter(x=>x.id !== id )
        })
    }

    function setStatusTodos(id){
        // แบบ json spread
        // const newTodo = useTodos.map((todo) => todo.id.toString() === id ? { ...todo, doneStatus: !todo.doneStatus } : todo)
        // แบบคลาส
        const newTodo = useTodos.map((todo) => todo.id.toString() === id ? todo.setdoneStatus() : todo)
        setuseTodos(newTodo)

    }


    const Context = { 
        Lists : useTodos ,
        addTodolist : addTodolistFun,
        removeTodolist : removeTodolistFun,
        setStatusTodos : setStatusTodos
    }
    
    return  (<TodoContext.Provider value={Context}>
         {props.children}
    </TodoContext.Provider>)
}

export default TodoContext ;