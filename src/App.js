
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import EducationPage from './pages/EducationPage';
import Resources from './pages/Resources';
import Header from './components/Header';
import HeroMsg from './pages/HeroMsg';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <NavLink className="content" exact activeClassName="active" to="/">Home</NavLink>

          <NavLink className="content" activeClassName="active" to="/education">Education</NavLink>
          <NavLink className="content" activeClassName="active" to="/HeroMsg">Hear From Your Heroes</NavLink>
          <NavLink className="content" activeClassName="active" to="/Resources">Resources and Support</NavLink>
          <NavLink className="content" activeClassName="active" to="/about">FAQs</NavLink>
        </div>


        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/education" element={<EducationPage />}></Route>
          <Route path="/HeroMsg" element={<HeroMsg />}></Route>
          <Route path="/Resources" element={<Resources />}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
