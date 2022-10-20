import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Main from './Components/Main/Main';
import Menu from './Components/Menu/Menu';
import Footer from './Components/Footer/Footer';
import AOS from "aos";
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <div>
      <div className="App">
        <div>
          <div>
            <Navbar />
          </div>
          <Home />
          <div>
            <About />
          </div>
          <div>
            <Main />
          </div>
          <div>
            <Menu />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;