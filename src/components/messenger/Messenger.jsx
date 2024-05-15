import "./messenger.scss"
import sort from "./../../img/icons/sort.svg"
import man from "./../../img/logo/man.png"
import woman from "./../../img/logo/woman.png"
import doctor from "./../../img/logo/doctor.png"
import arrowDown from "./../../img/icons/arrow-down.svg"
import arrowLeft from "./../../img/icons/arrowLeft.svg"
import arrowRight from "./../../img/icons/arrowRight.svg"

const Messenger = () => {
        const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
        const month = months[new Date().getMonth()]
        const day = new Date().getDay()
        const year = new Date().getFullYear()
        const time = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
        const formattedDate = `${month} ${day}, ${year} ${time}`;
    return ( 
        
        <section className="messenger">
            <div className="messenger__container">
                <div className="messenger__header">
                    <h2>
                        Список последних ответов на вопросы
                        <span>(12 493)</span>
                    </h2>
                    <div className="sort__btn">
                        <img src={sort} alt="sort"/>
                        <span>Сортировать по</span>
                    </div>
                </div>
                <div className="messenger__search">
                    <form action="#!" className="question__search">
                        <div className="question__input">
                            <input type="text" placeholder="Искать по тексту в вопросе" />
                        </div>
                        <div className="search__btn">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6642 10.8358L9.50001 8.68911C10.3401 7.64168 10.7469 6.3122 10.6368 4.97404C10.5267 3.63587 9.90815 2.39073 8.90823 1.49465C7.9083 0.598573 6.60306 0.119658 5.26088 0.156385C3.91869 0.193112 2.64159 0.742689 1.69217 1.69211C0.74275 2.64153 0.193173 3.91863 0.156446 5.26082C0.119719 6.603 0.598634 7.90824 1.49471 8.90816C2.3908 9.90809 3.63593 10.5267 4.9741 10.6368C6.31226 10.7468 7.64175 10.34 8.68917 9.49994L10.8358 11.6466C10.8901 11.7013 10.9546 11.7447 11.0257 11.7743C11.0968 11.8039 11.173 11.8192 11.25 11.8192C11.327 11.8192 11.4033 11.8039 11.4743 11.7743C11.5454 11.7447 11.6099 11.7013 11.6642 11.6466C11.7693 11.5378 11.8281 11.3925 11.8281 11.2412C11.8281 11.0899 11.7693 10.9446 11.6642 10.8358ZM5.41667 9.49994C4.60907 9.49994 3.81959 9.26046 3.14809 8.81178C2.47659 8.3631 1.95322 7.72537 1.64416 6.97924C1.33511 6.2331 1.25424 5.41208 1.4118 4.61999C1.56936 3.8279 1.95826 3.10032 2.52932 2.52926C3.10038 1.95819 3.82796 1.56929 4.62005 1.41174C5.41214 1.25418 6.23317 1.33504 6.9793 1.6441C7.72543 1.95316 8.36316 2.47653 8.81184 3.14803C9.26052 3.81953 9.50001 4.609 9.50001 5.41661C9.50001 6.49958 9.0698 7.53819 8.30402 8.30396C7.53825 9.06974 6.49964 9.49994 5.41667 9.49994Z" fill="#FFFFFF"/>
                            </svg>
                            <span>Поиск</span>
                        </div>
                    </form>
                </div>
                <div className="chat__container">
                    <div className="chat__header">
                        <div className="question__number">
                            <span className="text">Вопрос:</span>
                            <span className="number">21408</span>
                        </div>
                        <div className="question__date">
                            {formattedDate}
                        </div>
                    </div>
                    <div className="chat__message">
                        <div className="message">
                            <div className="message__header">
                                <div className="message__count">
                                    <span>Получено ответов (3)</span>
                                </div>
                                <div className="message__name">
                                    <span>Lorri Warf (26 лет)</span>
                                </div>
                            </div>
                            <div className="message__text">
                                <p>"Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, 
                                    несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. 
                                    Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения... <span>Читать полностью</span>
                                </p>
                            </div>
                        </div>
                        <div className="message__ava">
                            <img src={man} alt="" />
                        </div>
                    </div>
                    <div className="chat__message reply__message">
                        <div className="message__ava">
                            <img src={doctor} alt="" />
                        </div>
                        <div className="message">
                            <div className="message__header">
                                <div className="message__name">
                                    <span>Mary Freund (Гастроинтеролог)</span>
                                </div>
                                <div className="message__date">
                                    <span>{formattedDate}</span>
                                </div>
                                
                            </div>
                            <div className="message__text">
                                <p>
                                "Можете ли вы, пожалуйста, объяснить, какие могут быть причины моих текущих симптомов 
                                (укажите свои симптомы), какие диагностические тесты вы рекомендуете для подтверждения диагноза, 
                                и какие методы лечения или изменения в образе жизни вы считаете наиболее эффективными для улучшения моего... <span>Читать полностью</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="chat__message message__border-radius">
                        <div className="answer__btn">
                            <span>Смотреть все ответы (2)</span>
                            <img src={arrowDown} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="messenger__container">
                <div className="chat__container">
                <div className="chat__header">
                        <div className="question__number">
                            <span className="text">Вопрос:</span>
                            <span className="number">21408</span>
                        </div>
                        <div className="question__date">
                            {formattedDate}
                        </div>
                    </div>
                    <div className="chat__message">
                        <div className="message">
                            <div className="message__header">
                                <div className="message__count">
                                    <span>Получено ответов (3)</span>
                                </div>
                                <div className="message__name">
                                    <span>Kimberly Mastrangelo (24 лет)</span>
                                </div>
                            </div>
                            <div className="message__text">
                                <p>"Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, 
                                    несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. 
                                    Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения... <span>Читать полностью</span>
                                </p>
                            </div>
                        </div>
                        <div className="message__ava">
                            <img src={woman} alt="" />
                        </div>
                    </div>
                    <div className="chat__message reply__message">
                        <div className="message__ava">
                            <img src={doctor} alt="" />
                        </div>
                        <div className="message">
                            <div className="message__header">
                                <div className="message__name">
                                    <span>Mary Freund (Гастроинтеролог)</span>
                                </div>
                                <div className="message__date">
                                    <span>{formattedDate}</span>
                                </div>
                                
                            </div>
                            <div className="message__text">
                                <p>
                                "Можете ли вы, пожалуйста, объяснить, какие могут быть причины моих текущих симптомов 
                                (укажите свои симптомы), какие диагностические тесты вы рекомендуете для подтверждения диагноза, 
                                и какие методы лечения или изменения в образе жизни вы считаете наиболее эффективными для улучшения моего... <span>Читать полностью</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="chat__message message__border-radius">
                        <div className="answer__btn">
                            <span>Смотреть все ответы (2)</span>
                            <img src={arrowDown} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="messenger__container">
                <div className="chat__container">
                    <div className="chat__header">
                        <div className="question__number">
                            <span className="text">Вопрос:</span>
                            <span className="number">21408</span>
                        </div>
                        <div className="question__date">
                            {formattedDate}
                        </div>
                    </div>
                    <div className="chat__message">
                        <div className="message">
                            <div className="message__header">
                                <div className="message__count">
                                    <span>Получено ответов (3)</span>
                                </div>
                                <div className="message__name">
                                    <span>Lorri Warf (26 лет)</span>
                                </div>
                            </div>
                            <div className="message__text">
                                <p>"Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, 
                                    несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. 
                                    Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения... <span>Читать полностью</span>
                                </p>
                            </div>
                        </div>
                        <div className="message__ava">
                            <img src={man} alt="" />
                        </div>
                    </div>
                    <div className="chat__message reply__message">
                        <div className="message__ava">
                            <img src={doctor} alt="" />
                        </div>
                        <div className="message">
                            <div className="message__header">
                                <div className="message__name">
                                    <span>Mary Freund (Гастроинтеролог)</span>
                                </div>
                                <div className="message__date">
                                    <span>{formattedDate}</span>
                                </div>
                                
                            </div>
                            <div className="message__text">
                                <p>
                                "Можете ли вы, пожалуйста, объяснить, какие могут быть причины моих текущих симптомов 
                                (укажите свои симптомы), какие диагностические тесты вы рекомендуете для подтверждения диагноза, 
                                и какие методы лечения или изменения в образе жизни вы считаете наиболее эффективными для улучшения моего... <span>Читать полностью</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="chat__message message__border-radius">
                        <div className="answer__btn">
                            <span>Смотреть все ответы (2)</span>
                            <img src={arrowDown} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="messenger__container">
                <div className="chat__container">
                    <div className="chat__header">
                        <div className="question__number">
                            <span className="text">Вопрос:</span>
                            <span className="number">21408</span>
                        </div>
                        <div className="question__date">
                            {formattedDate}
                        </div>
                    </div>
                    <div className="chat__message">
                        <div className="message">
                            <div className="message__header">
                                <div className="message__count">
                                    <span>Получено ответов (3)</span>
                                </div>
                                <div className="message__name">
                                    <span>Kimberly Mastrangelo (24 лет)</span>
                                </div>
                            </div>
                            <div className="message__text">
                                <p>"Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, 
                                    несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. 
                                    Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения... <span>Читать полностью</span>
                                </p>
                            </div>
                        </div>
                        <div className="message__ava">
                            <img src={woman} alt="" />
                        </div>
                    </div>
                    <div className="chat__message reply__message">
                        <div className="message__ava">
                            <img src={doctor} alt="" />
                        </div>
                        <div className="message">
                            <div className="message__header">
                                <div className="message__name">
                                    <span>Mary Freund (Гастроинтеролог)</span>
                                </div>
                                <div className="message__date">
                                    <span>{formattedDate}</span>
                                </div>
                                
                            </div>
                            <div className="message__text">
                                <p>
                                "Можете ли вы, пожалуйста, объяснить, какие могут быть причины моих текущих симптомов 
                                (укажите свои симптомы), какие диагностические тесты вы рекомендуете для подтверждения диагноза, 
                                и какие методы лечения или изменения в образе жизни вы считаете наиболее эффективными для улучшения моего... <span>Читать полностью</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="chat__message message__border-radius">
                        <div className="answer__btn">
                            <span>Смотреть все ответы (2)</span>
                            <img src={arrowDown} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="messenger__container">
                <div className="chat__container">
                    <div className="chat__header">
                        <div className="question__number">
                            <span className="text">Вопрос:</span>
                            <span className="number">21408</span>
                        </div>
                        <div className="question__date">
                            {formattedDate}
                        </div>
                    </div>
                    <div className="chat__message">
                        <div className="message">
                            <div className="message__header">
                                <div className="message__count">
                                    <span>Получено ответов (3)</span>
                                </div>
                                <div className="message__name">
                                    <span>Lorri Warf (26 лет)</span>
                                </div>
                            </div>
                            <div className="message__text">
                                <p>"Здравствуйте, доктор. В последнее время я заметил(а), что стал(а) быстро уставать и появилась постоянная усталость, 
                                    несмотря на полноценный сон. К тому же, у меня снизился аппетит, и я замечаю периодические головные боли. 
                                    Могли бы вы подсказать, что это может быть и какие обследования мне стоит пройти для уточнения... <span>Читать полностью</span>
                                </p>
                            </div>
                        </div>
                        <div className="message__ava">
                            <img src={man} alt="" />
                        </div>
                    </div>
                    <div className="chat__message reply__message">
                        <div className="message__ava">
                            <img src={doctor} alt="" />
                        </div>
                        <div className="message">
                            <div className="message__header">
                                <div className="message__name">
                                    <span>Mary Freund (Гастроинтеролог)</span>
                                </div>
                                <div className="message__date">
                                    <span>{formattedDate}</span>
                                </div>
                                
                            </div>
                            <div className="message__text">
                                <p>
                                "Можете ли вы, пожалуйста, объяснить, какие могут быть причины моих текущих симптомов 
                                (укажите свои симптомы), какие диагностические тесты вы рекомендуете для подтверждения диагноза, 
                                и какие методы лечения или изменения в образе жизни вы считаете наиболее эффективными для улучшения моего... <span>Читать полностью</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="chat__message message__border-radius">
                        <div className="answer__btn">
                            <span>Смотреть все ответы (2)</span>
                            <img src={arrowDown} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="page__container">
                <div className="page__arrow page__pre"><img src={arrowLeft} alt="" /></div>
                <div className="page__number">
                    <ul>
                        <li className="active">1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li className="more">...</li>
                    </ul>
                </div>
                <div className="page__arrow page__next"><img src={arrowRight} alt="" /></div>
            </div>
        </section>
     );
}
 
export default Messenger
