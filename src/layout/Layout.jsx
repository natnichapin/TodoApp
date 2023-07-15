
import NavbarType from "./Navgation.jsx";




function Layout(props){

    
    return (<div className='w-full h-full'> 
        <NavbarType></NavbarType>
        Hello
        {props.children}
    </div>)
}

export default Layout ;