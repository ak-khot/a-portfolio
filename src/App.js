import './App.css';
import { Route ,Routes } from 'react-router';

import About from './Component/About';
import Home from './Component/Home';
import Nav from './Component/Navbar/Navbar';
import Projects from './Component/Projects';
import Contact from './Component/Contact';

function App() {
  return (
    <> 
        <Nav />
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
       */}
    
       <Home />
      <About /> 
      <Projects />
      < Contact/>
      
    </>
  );
}

export default App;
