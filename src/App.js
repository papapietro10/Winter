import {NavBar }from './Navbar/Navbar';

import {Inicio} from './inicio/Inicio';

import { BrowserRouter,  Route, Routes } from 'react-router-dom';
function App() {
  return (
<div>

    <BrowserRouter>

      <div className="App">
      <NavBar/>
      <Inicio/>
        <Routes>
        <Route path="/" element={<Inicio />}/>
          <Route path="/" element={<NavBar />}/>
         
        </Routes>

      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;