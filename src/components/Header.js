import React from 'react'; 

const Header = ({ lang, isScrolled, popUpSwitch, scrollTo }) => {
    return (
        <header className={isScrolled ? "header--fixed" : "header"}>
            <div className={isScrolled ? "container" : null}>
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
            </div>
        </header>
    );
}

export default Header;