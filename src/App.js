import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import SociaLink from './Components/SociaLink';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Experience from './Components/Experience';
function App() {
  return (
    <div>
      <Navbar />
      <About />
      <SociaLink />
      <Portfolio />
      <Experience />
    </div>
  );
}

export default App;
