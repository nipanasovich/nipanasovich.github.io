import React from 'react'; 

const Header = ({ lang, isScrolled, popUpSwitch, scrollTo, isHeaderOpened, changeHeaderState }) => {
    return (
        <header className={isScrolled ? "header--fixed" : "header"}>
            <div className={isScrolled ? "container" : null }>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__list-item" onClick={() => scrollTo("#about-me-link")}>
                            { lang === "EN" ? "About Me" : "Обо Мне"} 
                        </li>
                        <li className="header__list-item" onClick={() => scrollTo("#my-skills-link")}>
                            { lang === "EN" ? "Skills and Knowledges" : "Навыки и Знания"} 
                        </li>
                        <li className="header__list-item" onClick={() => scrollTo("#latest-works-link")}>
                            { lang === "EN" ? "Latest Works" : "Последние Работы"} 
                        </li>
                        <li className="header__list-item" onClick = { () => popUpSwitch() }>
                            { lang === "EN" ? "Contacts" : "Контакты"}
                        </li>

                    </ul>
                </nav>

                <div className="header--low">
                    <button className={isHeaderOpened ? "header--low__button--close" : "header--low__button" } onClick={() => changeHeaderState()} >
                        <span className="header--low__button-line" id={isHeaderOpened ? "line-1" : null }></span>
                        <span className="header--low__button-line" id={isHeaderOpened ? "line-2" : null }></span>
                        <span className="header--low__button-line" id={isHeaderOpened ? "line-3" : null }></span>
                    </button>
                    <ul className={isHeaderOpened ? "header--low__list--active" : "header--low__list" }>
                        <li className="header--low__list-item" onClick={() => scrollTo("#about-me-link")}>
                            { lang === "EN" ? "About Me" : "Обо Мне"} 
                        </li>
                        <li className="header--low__list-item" onClick={() => scrollTo("#my-skills-link")}>
                            { lang === "EN" ? "Skills and Knowledges" : "Навыки и Знания"} 
                        </li>
                        <li className="header--low__list-item" onClick={() => scrollTo("#latest-works-link")}>
                            { lang === "EN" ? "Latest Works" : "Последние Работы"} 
                        </li>
                        <li className="header--low__list-item" onClick = { () => popUpSwitch() }>
                            { lang === "EN" ? "Contacts" : "Контакты"}
                        </li>

                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;