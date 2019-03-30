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

import git from './img/github-color.svg';
import './css/main.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: 'EN',
      isLoaded: false,
      isScrolled: false,
      isPopUpOpened: false,
      isHeaderOpened: false,
      cardId: 1,
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
      id === length 
        ? id = 1 
        : ++id;
    } else if(direction === "left") {
      id === 1 
        ? id = length
        : --id;
    }
    this.scrollTo(`#card-${id}`);
    this.setState({ cardId: id});
  }
  

  changeHeaderState = () => {
    this.setState({
      isHeaderOpened: !this.state.isHeaderOpened,
    });
  }

  render() {
    const {lang, isLoaded, isScrolled, isPopUpOpened, isHeaderOpened} = this.state; 

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
        <section className="main-section" id="main">
          <div className='container'>
            {/* ------------------------- HEADER COMPONENT ----------------------- */}
            <Header 
              lang={ lang } 
              isScrolled={ isScrolled } 
              isHeaderOpened={ isHeaderOpened }
              popUpSwitch={ this.popUpSwitch }
              scrollTo={ this.scrollTo }
              changeHeaderState={ this.changeHeaderState }
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

            <h2 className="about-me-section__heading heading--2">
              { lang === "EN" ? "About Me" : "Обо Мне" }
            </h2>

            {/*---------------------- ABOUT ME SECTION COMPONENT --------------------- */}
            { lang === "EN" ? <AboutMeEn /> : <AboutMeRu /> }
          </div>
        </section>

        {/* ----------------------- SKILLS SECTION -------------------------- */}
        <section className="skills-section" id="my-skills-link">
          <div className="container">
            <h2 className="skills-section__heading heading--2">
              { lang === "EN" ? "My Skills and Knowledges" : "Мои Знания и Навыки" }
            </h2>

            {/* --------------------------- SKILLS SECTION COMPONENT ------------------------ */}
            { lang === "EN" ? <SkillsEn /> : <SkillsRu /> }
          </div>
        </section>
        
        {/* ------------------------- LATEST WORKS SECTION --------------------- */}
        <section className="latest-works-section" id="latest-works-link">
              <div className="container">
                <h2 className="latest-works-section__heading heading--2">
                  { lang === "EN" ? "Latest Works" : "Последние Работы" }
                </h2>
              
                {/* ------------------- LATEST WORKS SECTION COMPONENT ------------------ */}
                <LatestWorks 
                  lang={ lang } 
                  changeCard={this.changeCard}
                />
              </div>
        </section>

        {/* ------------------------ FOOTER -------------------- */}
        <footer className="footer">
          <div className="container footer__wrapper">
            <div className="footer__text--wrapper">
              <p className="footer__text">
                { 
                  lang === "EN" 
                  ? "Created using React.js. Full code: "
                  : "Создано при помощи React.js. Полный код: "
                }
                <a 
                  className="github-link"
                  href="https://github.com/jintsuu/jintsuu.github.io/tree/sources" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={ git } alt='git img' className="github-link__img" />
                </a>
              </p>
              <span>
                { lang === "EN" ? "March" : "Март"}, 2019
              </span>
            </div>
            <button className="footer__to-top" onClick={() => this.scrollTo("#main")}></button>
          </div>
        </footer>
        
      </div>
    );
  }
}

export default App;
