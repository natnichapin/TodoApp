import { useContext , useState,useEffect, useRef,useMemo} from 'react';
import BlockTodo from '../component/BlockTodo';
import TodoContext from '../store/Todolist';
function Notdonepage(props){
    const todoctx = useContext(TodoContext);
    // const [test,setTest] = useState()
    // const testUseMomo = useMemo(()=>
    // {   
    //     console.log(todoctx.Lists);
    //     console.log(todoctx.NotDoneList());
    //     return todoctx.NotDoneList()
    // },[todoctx.Lists]
    // )
   

    //forwardRef([])
    
    return <div className="w-4/5 h-4/5 bg-purple-200 grid grid-cols-3">
      
                {todoctx.NotDoneList.map((todo)=>  
     <BlockTodo   key={todo?.id-1} id={todo?.id}  name={todo.Name} description={todo.description} donestatus={todo.doneStatus}></BlockTodo>)}
        
         </div>
}

export default Notdonepage;