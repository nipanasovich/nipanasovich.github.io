import React, { Component } from 'react';

import Header from './components/Header';
import LangButton from './components/LangButton';
import AboutMeRu from './components/AboutMeRu';
import AboutMeEn from './components/AboutMeEn';
import Preloader from './components/Preloader';
import PopUpContacts from './components/PopUpContacts';
import SkillsRu from './components/SkillsRu';
import SkillsEn from './components/SkillsEn';
import LatestWorks from './components/LatestWorks';

import './css/main.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: 'EN',
      isLoaded: false,
      isScrolled: false,
      isPopUpOpened: false,
      cardId: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.changeHeaderClass);
  }

  langChange = (language) =>{
    this.setState({
      lang: language,
    });
  }

  scrollTo = (link) => {
    let element = document.querySelector(link);
    element.scrollIntoView();
  }

  changeHeaderClass = () => {
    document.querySelector("html").scrollTop > 50 
      ? this.setState({ isScrolled: true })
      : this.setState({ isScrolled: false });
  }

  popUpSwitch = () => {
    this.setState({
      isPopUpOpened: !this.state.isPopUpOpened
    });
  }

  onLoad = () => {
    this.setState({
      isLoaded: true,
    });
    console.log('im loaded');
  }

  changeCard = (direction, length) => {
    let id = this.state.cardId;
    if(direction === "right") {
      this.state.cardId === (length - 1) 
        ? this.setState({ cardId: 0 })
        : this.setState({ cardId: ++id });
    } else if(direction === "left") {
      this.state.cardId === 0 
        ? this.setState({ cardId: (length - 1) })
        : this.setState({ cardId: --id });
      console.log(this.state);
    }
  }

  render() {
    const {lang, isLoaded, isScrolled, isPopUpOpened, cardId} = this.state; 

    return (
      <div className={ isLoaded ? "App" : "App-Loading" } onLoad={ this.onLoad }>
        {/* ---------------- PRELOADER COMPONENT ---------------------- */}
        <Preloader isLoaded={ isLoaded } />
        {/* --------------- POP UP COMPONENT ------------------- */}
        <PopUpContacts 
          isPopUpOpened={ isPopUpOpened } 
          lang={ lang } 
          popUpSwitch={ this.popUpSwitch }
        />

        {/* ------------------------ MAIN SECTION ------------------------ */}
        <section className="main-section">
          <div className='container'>
            {/* ------------------------- HEADER COMPONENT ----------------------- */}
            <Header 
              lang={ lang } 
              isScrolled={ isScrolled } 
              popUpSwitch={ this.popUpSwitch }
              scrollTo={ this.scrollTo }
            />

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

        {/* ----------------------- LANG SWITCH BUTTON COMPONENT ------------------------ */}
        <LangButton 
          lang={ lang } 
          langChange={ this.langChange } 
        />

        {/* ------------------------ ABOUT ME SECTION -------------------------------- */}
        <section className='about-me-section' id="about-me-link">
          <div className='container'>

            <h2 className="about-me-section__heading">
              { lang === "EN" ? "About Me" : "Обо Мне" }
            </h2>

            {/*---------------------- ABOUT ME SECTION COMPONENT --------------------- */}
            { lang === "EN" ? <AboutMeEn /> : <AboutMeRu /> }
          </div>
        </section>

        {/* ----------------------- SKILLS SECTION -------------------------- */}
        <section className="skills-section" id="my-skills-link">
          <div className="container">
            <h2 className="skills-section__heading">
              { lang === "EN" ? "My Skills and Knowledges" : "Мои Знания и Навыки" }
            </h2>

            {/* --------------------------- SKILLS SECTION COMPONENT ------------------------ */}
            { lang === "EN" ? <SkillsEn /> : <SkillsRu /> }
          </div>
        </section>
        
        {/* ------------------------- LATEST WORKS SECTION --------------------- */}
        <section className="latest-works-section" id="latest-works-link">
              <div className="container">
                <h2 className="latest-works-section__heading">
                  { lang === "EN" ? "Latest Works" : "Последние Работы" }
                </h2>

                {/* ------------------- LATEST WORKS SECTION COMPONENT ------------------ */}
                <LatestWorks 
                  lang={ lang } 
                  cardId={ cardId }
                  changeCard={this.changeCard}
                />
              </div>
        </section>
        
      </div>
    );
  }
}

export default App;
