import { useEffect } from 'react';
import './App.css';
import './boostrap/css/bootstrap.min.css';
import About from './componenets/About/About';
import Contact from './componenets/Contact/Contact';
import Footer from './componenets/Footer/Footer';
import Main from './componenets/Main/Main';
import Navbar from './componenets/Navbar/Navbar';
import Projects from './componenets/Projects/Projects';
import Summary from './componenets/Summary/Summary';
import $ from 'jquery';

function App() {
  useEffect(() => {
    const navigation = () =>{
        $('.primary-nav').css('height', $('.logo').height());
        $('.primary-nav li').css(
          'margin-top',
          ($('.primary-nav').height() - $('.primary-nav li').height()) / 2 + 'px'
        );
    }

    setTimeout(() => {
      console.log('set');
      navigation();
    }, 500);
  }, [])

  useEffect(() => {
    function projects() {
      $('.luvtalk-project').css('height', $('.luvtalk-project').width());
      $('.luvtalk-project h3').css(
        'padding-top',
        ($('.luvtalk-project').height() -
          $('.luvtalk-project h3').height() -
          $('.luvtalk-project .row').outerHeight()) /
          2
      );
      $('.personal-website-project').css(
        'height',
        $('.personal-website-project').width()
      );
      $('.personal-website-project h3').css(
        'padding-top',
        ($('.personal-website-project').height() -
          $('.personal-website-project h3').height() -
          $('.personal-website-project .row').outerHeight()) /
          2
      );
      $('.strike-zone-project').css('height', $('.strike-zone-project').width());
      $('.strike-zone-project h3').css(
        'padding-top',
        ($('.strike-zone-project').height() -
          $('.strike-zone-project h3').height() -
          $('.strike-zone-project .row').outerHeight()) /
          2
      );
    }
    
    projects();
    
  }, [])

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
