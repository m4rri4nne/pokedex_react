import Home from "./screens/Home"
import Pokedex from "./screens/Pokedex"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = ()=>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="pokedex" element={<Pokedex/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App
