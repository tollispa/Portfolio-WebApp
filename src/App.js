import Home from "./components/Home"
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";




function App() {
  return (
    
    <div className="App">
      <Navbar/>
       <Home/>
       <Skills/>
       <Projects/>
       <Footer/>
      
    
    </div>
  );
}

export default App;
