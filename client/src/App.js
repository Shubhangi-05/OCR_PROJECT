import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import CreatenewOCR from './pages/CreatenewOCR.js';
import DeleteOCR from './pages/DeleteOCR.js';
import UpdateOCR from './pages/UpdateOCR.js';
import DisplayOCR from './pages/DisplayOCR.js';
import DisplayAll from './pages/DisplayAll.js';

function App() {
  return (
    <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>
        <Route exact path='/create' element={<CreatenewOCR/>}></Route>
        <Route exact path='/update' element={<UpdateOCR/>}></Route>
        <Route exact path='/delete' element={<DeleteOCR/>}></Route>
        <Route exact path='/display' element={<DisplayOCR/>}></Route>
        <Route exact path='/displayAll' element={<DisplayAll/>}></Route>
    </Routes>
  );
}

export default App;
