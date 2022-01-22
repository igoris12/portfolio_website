import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from './components/About';
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
