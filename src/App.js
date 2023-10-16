
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PremiumPage from './pages/PremiumPage';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroMsg from './pages/HeroMsg';
import Resources from './pages/Resources';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content">
          <NavLink className="content" exact activeClassName="active" to="/">Home</NavLink>
          <NavLink className="content" activeClassName="active" to="/about">About</NavLink>
          <NavLink className="content" activeClassName="active" to="/premium">Premium Content</NavLink>
          <NavLink className="content" activeClassName="active" to="/HeroMsg">Hear From Your Heroes</NavLink>
          <NavLink className="content" activeClassName="active" to="/Resources">Resources</NavLink>
        </div>


        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/premium" element={<PremiumPage />}></Route>
          <Route path="/HeroMsg" element={<HeroMsg />}></Route>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
