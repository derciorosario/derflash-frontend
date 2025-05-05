import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/home/index';
import NotFound from './pages/404';
import Schedule from './pages/schedule/index';
function App() {


  return (
    <Router>
      <Routes>
         <Route path="/"  element={<Home/>} />
         <Route path="/schedule"  element={<Schedule/>} />
         <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );


}


export default App;
