import React from 'react'; 

const Header = ({ lang, isScrolled, popUpSwitch }) => {
    return (
        <header className={isScrolled ? "header--fixed" : "header"}>
            <div className={isScrolled ? "container" : null}>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__list-item">
                            <a href="#about-me-link" className="header__list-item--link"> { lang === "EN" ? "About Me" : "Обо Мне"} </a>
                        </li>
                        <li className="header__list-item">
                            <a href="#my-skills-link" className="header__list-item--link"> { lang === "EN" ? "Skills and Knowledges" : "Навыки и Знания"} </a>
                        </li>
                        <li className="header__list-item">
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