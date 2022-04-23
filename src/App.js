import './App.css';
import HeroSection from './Components/HeroSection';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="app">
      <Navbar>
        <HeroSection />
        <div id='skills'>
          <Skills />
        </div>
      </Navbar>
    </div>
  );
}

export default App;
