import { Link } from 'react-router-dom';
function NavbarType(props){

    return (
            <div className="flex h-11 w-full items-center  space-x-10  bg-purple-950 text-2xl  font-bold justify-center text-white">
                 <Link to="/"> 
                    <div className="hover:text-purple-300" >
                        All 
                     </div>
                  </Link> 
                  <Link to="/notdone"> 
                    <div className="hover:text-purple-300"> Not Done </div>
                  </Link> 
                  <Link to="/done"> 
                   <div className="hover:text-purple-300"> Done Already </div> 
                 </Link> 
               
               
            </div>
    )

}

export default NavbarType