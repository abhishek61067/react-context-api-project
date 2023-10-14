import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/cart' exact element={<Cart names='Cart page'/>}/>
      <Route path='/' exact element={<Home names='Home page'/>}/>
    </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
