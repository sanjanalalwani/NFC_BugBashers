import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './screens/TopBar';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Login from './screens/Login';
import Footer from './screens/Footer';
import Expense from './screens/Expense';



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
        </Routes>
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;
