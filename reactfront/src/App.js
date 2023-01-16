
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Se importo los componentes
import ShowAlumn from './components/ShowAlumn';
import CreateAlumn from './components/CreateAlumn';
import EditAlumn from './components/EditAlumn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>  
        <Route path='/' element={ <ShowAlumn/> } />
        <Route path='/create' element={<CreateAlumn/>}/>
        {<Route path='/edit/:id' element={<EditAlumn/>}/>}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

