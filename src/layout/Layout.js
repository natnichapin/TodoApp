import { useContext , useState,useEffect, useRef} from 'react';
import NavbarType from "./Navgation.js";
import BlockTodo from "../component/BlockTodo.js";
import TodoContext from "../store/Todolist";



function Layout(props){

    
    return (<div className='w-full h-full'> 
        <NavbarType></NavbarType>
        Hello
        {props.children}
    </div>)
}

export default Layout ;