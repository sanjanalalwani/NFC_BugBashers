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
import Community from './screens/Community';
import Quiz from './screens/Quiz';
import Resources from './screens/Resources';



import Module1 from './screens/Module1';
import Module2 from './screens/Module2';
import Module3 from './screens/Module3';
import Module5 from './screens/Module5';
import Module6 from './screens/Module6';
import Module7 from './screens/Module7';
import Module8 from './screens/Module8';
import Module9 from './screens/Module9';

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
          <Route path="/module3" element={<Module3/>} />
          {/* <Route path="/module4" element={<Module4/>} /> */}
          <Route path="/module5" element={<Module5/>} />
          <Route path="/module6" element={<Module6/>} />
          <Route path="/module7" element={<Module7/>} />
          <Route path="/module8" element={<Module8/>} />
          <Route path="/module9" element={<Module9/>} />
        
        
        
          <Route path="/community" element={<Community />}/>
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/resources" element={<Resources/>}/>
        </Routes>
       
        <Footer />
      </div>
    </Router>
  );
}

export default App;
