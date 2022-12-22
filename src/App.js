import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import SociaLink from './Components/SociaLink';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Skill from './Components/Skill';
function App() {
  return (
    <div>
      <Navbar />
    <Home />
      <About />
      <SociaLink />
      <Portfolio />
      <Skill />
    </div>
  );
}

export default App;
