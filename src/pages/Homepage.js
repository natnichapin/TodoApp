import { useContext , useState,useEffect, useRef} from 'react';
import NavbarType from '../layout/Navgation';
import BlockTodo from '../component/BlockTodo';
import TodoContext from '../store/Todolist';
 function HomePage(props){

        const todoctx = useContext(TodoContext);

    const testinput = useRef();

    const addTodo = () => {
        todoctx.addTodolist('New Todo Item', 'This is a new todo item');
 
      };
      
  const deleteTodo=()=>{
    console.log("delete clicked");
    if( testinput.current.value  && todoctx.Lists.every((todo) => todo.id !== testinput.current.value )){
        todoctx.removeTodolist(Number(testinput.current.value))
      
    }
    else{
    alert("CAN NOT DELETE, please enter value");
    }
  }   
  
      // ใช้เพื่อต้องการ hook บาง side Effect ที่เกิดกับ array dependencies
      // useEffect(()=>{
      //   settodo(todoctx.Lists)
      // },todoctx.Lists)
    const Clickdone=(e)=>{ 
      console.log(e.target.id);
    }
  




     return (<div className='w-full min-h-full flex-col' >
    {/* <p> Your click : {count} </p>  */}
    
    <div className=' w-full h-1/5 flex  bg-purple-300 content-center p-5  space-x-5'> 
    <label className=' font-bold text-yellow-800'> Enter id for delete 
             <input type="text" ref={testinput}  className="m-4" ></input>
     </label>  
    <button onClick={addTodo} className='bg-green-700 w-fit h-fit p-2 rounded-lg text-white hover:bg-slate-500'> Add + </button>
    <button onClick={deleteTodo}  className='bg-red-800 w-fit h-fit p-2 rounded-lg text-white hover:bg-slate-500'> Delete - </button>
    </div>
      <div className=" w-full h-full grid grid-cols-3 space-x-2  justify-items-center content-center  mx-auto my-10  bg-white  overflow-y-auto py-10  "> 
     
     {todoctx.Lists.map((todo)=>  
     <BlockTodo    OnDoneClick={Clickdone}    key={todo?.id-1} id={todo?.id}  name={todo.Name} description={todo.description} donestatus={todo.doneStatus}></BlockTodo>)}
     </div> 
 </div>)
}

export default HomePage;