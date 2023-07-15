import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './pages/Homepage'
import NotdonePage from './pages/Notdonepage'
import DoneAlready from './pages/DoneAlready';
import Layout from './layout/Layout';
import './App.css';

function App() {
  return (
    <div className="w-screen h-screen bg-pink-200 overflow-y-auto ">
       <div className="grid over text-center text-3xl content-center  text-white  w-full h-20  font-bold bg-black">
            Test Todo List With react 
      </div> 
    
      <Layout Name={"PIN"} >
   
      <Routes> 
        {/* ระบุพื้นที่ที่จะให้ทำ router */}
        <Route path='/' element={<HomePage/>}  />
        <Route path='/notdone' element={<NotdonePage />} />
        <Route path='/done' element={<DoneAlready/>}/>
     
        </Routes>
      
      </Layout>
    </div>
  );
}

export default App;
