import { useEffect } from 'react';
import './boostrap/css/bootstrap.min.css';
import Navbar from './componenets/Navbar/Navbar';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './componenets/Home/Home';
import Projects from './componenets/Projects/Projects';
import Contact from './componenets/Contact/Contact';
import Footer from './componenets/Footer/Footer';

function App() {
  useEffect(() => {
    const navigation = () => {
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
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/projects'>
            <Projects />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
