import './App.css';
import './boostrap/css/bootstrap.min.css';
import About from './componenets/About/About';
import Contact from './componenets/Contact/Contact';
import Footer from './componenets/Footer/Footer';
import Main from './componenets/Main/Main';
import Navbar from './componenets/Navbar/Navbar';
import Projects from './componenets/Projects/Projects';
import Summary from './componenets/Summary/Summary';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <About />
      <Summary />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
