
import './App.css';
import Header from './components/Header';
import {Route, Routes} from "react-router-dom"
import Home from "./components/Home";
import Cart from './components/Cart';
function App() {
  return (
      <div className='App'>
        <>
        <header>
           <Header/>
        </header>
        <main>
           <Routes >
            <Route path='/' element={<Home/>} exact/>
            <Route path='/cart' element={<Cart/>} exact/>
          </Routes>
        </main>
          
        </>
          
      </div>
         
 
 

  );
}

export default App;
