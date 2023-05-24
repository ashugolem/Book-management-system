import './App.css';
import BookRecord from './components/BookRecord';
import DataEntryForm from './components/Entry';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Update from './components/Update';

function App() {
  return (
    <>
    <Router>
      <div id="wrapper">
        <Routes>
          <Route exact path='/' element={<BookRecord/>} />          
          <Route exact path='/entry' element={<DataEntryForm/>} />          
          <Route exact path='/update' element={<Update/>}/>
        </Routes>
      </div>      
    </Router>

    </>
    
  );
}

export default App;
