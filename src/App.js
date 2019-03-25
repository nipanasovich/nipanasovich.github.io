import React, { Component } from 'react';
import Header from './components/Header';
import LangButton from './components/LangButton';
import AboutMeRu from './components/AboutMeRu';
import AboutMeEn from './components/AboutMeEn';
import Preloader from './components/Preloader';
import PopUpContacts from './components/PopUpContacts';
import SkillsRu from './components/SkillsRu';
import SkillsEn from './components/SkillsEn';

import './css/main.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: 'EN',
      isLoaded: false,
      isScrolled: false,
      isPopUpOpened: false,
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

  popUpSwitch = () => {
    this.setState({
      isPopUpOpened: !this.state.isPopUpOpened
    });

    if(this.state.isPopUpOpened) {
      
    }
  }

  onLoad = () => {
    this.setState({
      isLoaded: true,
    });
    console.log('im loaded');
  }

  render() {
    const {lang, isLoaded, isScrolled, isPopUpOpened} = this.state; 
    return (
      <div className={isLoaded ? "App" : "App-Loading"} onLoad={this.onLoad}>
        <Preloader isLoaded={isLoaded} />
        <PopUpContacts isPopUpOpened={isPopUpOpened} lang={lang} popUpSwitch={this.popUpSwitch}/>
        <section className="main-section">
        <div className='container'>
          <Header lang={lang} isScrolled={isScrolled} popUpSwitch={this.popUpSwitch}/>
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
        <section className='about-me-section' id="about-me-link">
          <div className='container'>
            {lang === "EN" ? <AboutMeEn /> : <AboutMeRu /> }
          </div>
        </section>
        <section className="skills-section" id="my-skills-link">
          <div className="container">
            <h2 className="skills-section__heading">{ lang === "EN" ? "My Skills and Knowledges" : "Мои Знания и Навыки" }</h2>
            { lang === "EN" ? <SkillsEn /> : <SkillsRu /> }
          </div>
        </section>
        
      </div>
    );
  }
}

export default App;
