
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/Pages/Home/Home';

function App() {

  return (
    <>
      <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/beginner' element={<Level category='beginner'/>}/>
        <Route path='/intermediate' element={<Level category='intermediate'/>}/>
        <Route path='/advanced' element={<Level category='advanced'/>}/> */}
      </Routes>
      </BrowserRouter>
    </>
    </>
  )
}

export default App
