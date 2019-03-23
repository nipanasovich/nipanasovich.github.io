import React from 'react'; 

const Header = ({lang, isScrolled}) => {
    return (
        <header className={isScrolled ? "header--fixed" : "header"}>
            <div className={isScrolled ? "container" : null}>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__list-item">
                            { lang === "EN" ? "About Me" : "Обо Мне"}
                        </li>
                        <li className="header__list-item">
                            { lang === "EN" ? "Latest Works" : "Последние Работы"}
                        </li>
                        <li className="header__list-item">
                            { lang === "EN" ? "Contacts" : "Контакты"}
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;