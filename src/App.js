import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Routes>
        <Route path='/search' element={<SearchPage/>}/>
         <Route path='/' element={ <Home></Home>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
