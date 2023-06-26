import Home from "./components/Home"
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";


function App() {

  return (
    
    <div className="App">
      <Navbar data-aos="fade-up"/>
       <Home/>
       <Skills data-aos="fade-right"/>
       <Projects/>
       <Footer/>
      
    
    </div>
  );
}

export default App;
