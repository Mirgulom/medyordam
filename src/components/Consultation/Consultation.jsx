import "./consultation.scss"
import star from "./../../img/icons/star.svg"
import question from "./../../img/icons/question.svg"
import files from "./../../img/icons/files.svg"

const Consultation = () => {
    return ( 
        <section className="consultation">
            <div className="container">
                <div className="consultation__container">
                    <div className="consult__button1">
                        <a href="#!">Консультация от врачей</a>
                    </div>
                    <div className="consult__name">
                        <span>Получайте бесплатную консультацию от лучших специалистов</span>
                    </div>
                    <div className="consult__btns">
                        <div className="consult__btn best__consults">
                            <img src={star} alt="" />
                            Лучшие консультанты
                        </div>
                        <div className="consult__btn ask__quest">
                            <img src={question} alt="" />
                            Задать вопрос
                        </div>
                        <div className="consult__btn popular__quest">
                            <img src={files} alt="" />
                            Популярные вопросы
                        </div>
                    </div>
                    <div className="statistics__info">
                        <div className="doctors__count">
                            <span className="lg-size">+1 000</span>
                            <span className="sm-size">Врачей различных специализаций </span>
                        </div>
                        <div className="medical__care">
                            <span className="lg-size">24/7</span>
                            <span className="sm-size">Доступ к медицинской помощи</span>
                        </div>
                        <div className="reviews">
                            <span className="lg-size">+ 95%</span>
                            <span className="sm-size">Положительных отзывов</span>
                        </div>
                        <div className="users">
                            <span className="lg-size">+20 000</span>
                            <span className="sm-size">Анкет пользователей</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Consultation;