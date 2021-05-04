import React from 'react'
import Main from '../Main/Main';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Summary from '../Summary/Summary';


const Home = () => {
    return (
        <div>
            <Main />
            <About />
            <Summary />
            <Projects />
            <Contact />
        </div>
    )
}

export default Home
