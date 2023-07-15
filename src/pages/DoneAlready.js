import { useContext , useState,useEffect, useRef} from 'react';
import BlockTodo from '../component/BlockTodo';
import TodoContext from '../store/Todolist';
function DoneAlready(props){
    const todoctx = useContext(TodoContext);
    
    return <div className="w-4/5 h-4/5 bg-purple-200 grid grid-cols-3">
    {todoctx.DoneList.map((todo)=>  
<BlockTodo   key={todo?.id-1} id={todo?.id}  name={todo.Name} description={todo.description} donestatus={todo.doneStatus}></BlockTodo>)}

</div>
}

export default DoneAlready;