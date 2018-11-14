import React, { Component } from 'react';
import Main from './components/Main/Main';
import PopUp from './components/PopUp/PopUp';
import Lang from './components/Lang/Lang';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import {skills} from './skills';
import Particles from 'react-particles-js';
import LatestWorks from './components/LatestWorks/LatestWorks';
import './App.css';
import 'tachyons';


const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: 'en',
      route: '',
      popup: false,
    }
  }
  
  langChange = (route) => {
    route === 'en' ? this.setState({lang: 'en'}) : this.setState({lang: 'ru'})
  }

  popUpChange = () => {
    this.setState({
      popup: !this.state.popup
    });
    console.log('click');
  }

  render() {
    const {lang, popup} = this.state
    return (
      <main className="App">
        <section className='main pt5'>
          <h2 className='hidden'>Main Info Section</h2>
          {popup ? <PopUp popUpChange={this.popUpChange} lang={lang} /> : null}
          <div className='container'>
            <Lang className='lang' langChange={this.langChange}/>
            <Main lang={lang}/>
            <button className='hire-btn' onClick={this.popUpChange}>{lang === 'en' ? 'Hire Me!' : 'Найми меня!'}</button>
          </div>
        </section>
        <section className='about-me'>
          <h2 className='hidden'>About Me Section</h2>
          <div className='container'>
            <AboutMe lang={lang}/>
          </div>
        </section>
        <section className='skills'>
          <h2 className='hidden'>My Skills Section</h2>
            <Particles className='particles'
            params={particlesOptions}
            />
          <div className='container'>
            <Skills lang={lang} skills={skills} />
          </div>
        </section>
        <section className='latest-works'>
          <h2 className='hidden'>Latest Works Section</h2>
          <div className='container'>
            <LatestWorks lang={lang} />
          </div>
        </section>
      </main>
    );
  }
}

export default App;
