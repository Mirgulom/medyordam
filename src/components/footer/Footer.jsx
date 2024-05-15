import "./footer.scss"
import logo from "./../../img/logo/Logo_footer.png"

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__container">
                    <div className="footer__content1">
                        <div className="footer__logo">
                            <a href="#!"><img src={logo} alt="logo"/></a>
                            <a href="#!">Консультация от врачей</a>
                        </div>
                        <div className="footer__catalog">
                            <span>Каталог услуг</span>
                            <ul>
                                <li className="active"><a href="#!">Медицинская консультация</a></li>
                                <li><a href="#!">Справочник лекарств</a></li>
                                <li><a href="#!">Справочник болезней</a></li>
                                <li><a href="#!">Справочник лекарств</a></li>
                                <li><a href="#!">Справочник Врачей и Клиник</a></li>
                            </ul>
                        </div>
                        <div className="footer__execute">
                            <span>Выполнить</span>
                            <ul>
                                <li><a href="#!">Задать вопрос</a></li>
                                <li><a href="#!">Лучшие консультанты</a></li>
                                <li><a href="#!">Популярные вопросы</a></li>
                                <li><a href="#!">Регистрация</a></li>
                                <li><a href="#!">Вход в личный кабинет</a></li>
                            </ul>
                        </div>
                        <div className="footer__project">
                            <span>Проект</span>
                            <ul>
                                <li><a href="#!">Проект</a></li>
                                <li><a href="#!">Сотрудничество</a></li>
                                <li><a href="#!">Контакты для связи</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer__content2">
                        <span>MedYordam 2024 - Все права защищены</span>
                        <a>Обработка данных</a>
                        <a>Условия использования</a>
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;