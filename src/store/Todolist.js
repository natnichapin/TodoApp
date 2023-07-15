import { createContext, useState ,useMemo } from 'react'; 
import todoClass from '../composable/todoClass';
//import Layout from '../layout/Layout';
const TodoContext = createContext({
    Lists: [],
    totalList:0,
    addTodolist:(Name,description)=>{},
    removeTodolist:(id)=>{},
    setStatusTodos:(id)=>{} ,
    DoneList:[],
    NotDoneList:[]
    
})

export function TodoContextProvider(props){ 
const [useTodos,setuseTodos] = useState([])
const [useDone,setuseDone] = useState([])
const [useNotDone,setuseNotDone] = useState([])
// const Done = useMemo(()=>{
//     //useTodos.forEach((x)=> console.log(x.doneStatus  + " HHH " +x.description))
//    //console.log(useTodos.filter(x=>x.doneStatus==false)); 
//     return useTodos.filter(x=>x.doneStatus === true)},[useTodos])
// const NotDone = useMemo(()=>{return useTodos.filter(x=>x.doneStatus === false)} ,[useTodos])

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
        //return useTodos.filter(x=>x.id === id)
        setuseTodos((prevTodo)=>{
        return prevTodo.filter(x=>x.id !== id )
        })
    }

    function setStatusTodos(id){
        let newtodo = useTodos.find(x=>x.id.toString() === id)
        newtodo.setdoneStatus()
        setuseDone(()=>useTodos.filter(x=>x.doneStatus==true))
        setuseNotDone(()=>useTodos.filter(x=>x.doneStatus==false))
  
    }

    // function DoneListFun(){

    
    //         setfilterlist(()=>{
                
    //             return useTodos.filter(x=>x.doneStatus === true) 
    //         })
    //         return filterlist
       
    // }

    // function NotDoneListFun(){
    //     setfilterlist(()=>{
    //         return useTodos.filter(x=>x.doneStatus === false) 
    //     })
    //    //return filterlist
    // }

    const Context = { 
        Lists : useTodos ,
        totalList : useTodos.length ,
        addTodolist : addTodolistFun,
        removeTodolist : removeTodolistFun,
        setStatusTodos : setStatusTodos,
        DoneList:useDone,
        NotDoneList:useNotDone
    }
    
    return  (<TodoContext.Provider value={Context}>
         {props.children}
    </TodoContext.Provider>)
}

export default TodoContext ;