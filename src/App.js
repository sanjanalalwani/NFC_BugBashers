import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './screens/TopBar';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Login from './screens/Login';
import Footer from './screens/Footer';
import Expense from './screens/Expense';
import Module from './screens/Module';
import Module1 from './screens/Module1';
import Module2 from './screens/Module2'

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/expense"element={<Expense />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/module" element={<Module />} />
          <Route path="/module1" element={<Module1/>} />
          <Route path="/module2" element={<Module2/>} />
        </Routes>
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;
