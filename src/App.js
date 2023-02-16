// import do react
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import das pages
import Login from './pages/home/Login';
import Sub from './pages/sub/Sub';
import Conteudo from './pages/conteudo/Conteudo';


function App() {

 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/Conteudo' element={<Conteudo/>}/>
          <Route exact path='/Sub' element={<Sub/>}/>
          <Route exact path='*' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
