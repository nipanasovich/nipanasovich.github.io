import React, { Component } from 'react';
import Header from './components/Header';
import LangButton from './components/LangButton';
import AboutMeRu from './components/AboutMeRu';
import AboutMeEn from './components/AboutMeEn';
import Preloader from './components/Preloader';

import './css/main.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: 'EN',
      isLoaded: true,
      isScrolled: false,
    }
  }

  langChange = (language) =>{
    this.setState({
      lang: language,
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.changeHeaderClass);
  }

  changeHeaderClass = () => {
    if (document.querySelector("html").scrollTop > 50) {
      this.setState({
        isScrolled: true,
      });
    } else {
      this.setState({
        isScrolled: false,
      });
    }
  }

  render() {
    const {lang, isLoaded, isScrolled} = this.state; 
    return (
      <div className="App">
        <Preloader isLoaded={isLoaded}/>
        <section className="main-section">
        <div className='container'>
          <Header lang={lang} isScrolled={isScrolled}/>
          <h1 className="main-section__heading">
            { lang === 'EN' 
            ? 'Nikita Panasovich'
            : 'Никита Панасович'
            }
            <span className="main-section__sub-heading">
            { lang === 'EN' 
            ? 'Frontend-Developer'
            : 'Фронтенд-Разработчик'
            }
          </span>
          </h1>
        </div>
        </section>
        <LangButton lang={lang} langChange={this.langChange} />
        <section className='about-me-section'>
          <div className='container'>
            {lang === "EN" ? <AboutMeEn /> : <AboutMeRu /> }
          </div>
        </section>
        
      </div>
    );
  }
}

export default App;
