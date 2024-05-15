import "./header.scss"
import location from "./../../img/icons/geo.svg"
import arrowDown from "./../../img/icons/arrow-down.svg"
import ru from "./../../img/icons/RU.png"
import logo from "./../../img/logo/Logo.png"
import apps from "./../../img/icons/apps.svg"

const Header = () => {
    return ( 
        <header className="header">
            <div className="container">
                <div className="header__container">
                    <div className="header__geo">
                        <div className="geo__location">
                            <img src={location} alt="location"/>
                            <select name="cities" id="">
                                <option value="tash">Ташкент</option>
                            </select>
                        </div>
                        <div className="page__language">
                            <img src={ru} alt="ru" />
                            <span>Язык:</span>
                            <select name="languages" id="" className="lang__list">
                                <option value="rus">Русский</option>
                                <option value="eng">English</option>
                            </select>
                        </div>
                    </div>
                    <div className="header__nav">
                        <div className="nav__logo">
                            <img src={logo} alt="logo"/>
                            <div className="consultation">
                                <a href="#!">Консультация от врачей</a>
                            </div>
                        </div>
                        <div className="nav__catalog">
                            <img src={apps} alt="catalog"/>
                            <span>Каталог услуг</span>
                        </div>
                        <div className="nav__links">
                            <ul className="links">
                                <li><a href="#!">О проекте</a></li>
                                <li><a href="#!">Партнерство</a></li>
                                <li><a href="#!">Контакты</a></li>
                            </ul>
                        </div>
                        <div className="nav__reg">
                            <a href="#!">Вход / Регистрация</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;
