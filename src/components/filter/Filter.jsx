import "./filter.scss"
import x from "./../../img/icons/x.svg"
import search from "./../../img/icons/search-name.svg"

const Filter = () => {
    return ( 
        <section className="filter">
            <div className="filter__container">
                <div className="filter__header">
                    <h3>Фильтрация по направлениям</h3>
                    <span>
                        <img src={x} alt="close"/>
                        Сбросить
                    </span>
                </div>
                <form action="#!" className="filter__form">
                    <div className="input__search">
                        <input type="text" className="search" placeholder="Поиск направления"/>
                        <img src={search} alt="search"/>
                    </div>
                    <div className="med__types">
                        <div className="checkbox__box"><input type="checkbox" name="ch_box1" id="ch_box1"/><label for="ch_box1">Аллерголог</label><span className="count">(12 312)</span></div>
                        <div className="checkbox__box"><input type="checkbox" name="ch_box2" id="ch_box2"/><label for="ch_box2">Андролог</label><span className="count">(12 312)</span></div>
                        <div className="checkbox__box"><input type="checkbox" name="ch_box3" id="ch_box3"/><label for="ch_box3">Венеролог</label><span className="count">(12 312)</span></div>
                        <div className="checkbox__box"><input type="checkbox" name="ch_box4" id="ch_box4"/><label for="ch_box4">Врач УЗИ</label><span className="count">(12 312)</span></div>
                        <div className="checkbox__box"><input type="checkbox" name="ch_box5" id="ch_box5"/><label for="ch_box5">Гастроэтеролог</label><span className="count">(12 312)</span></div>
                        <div className="checkbox__box"><input type="checkbox" name="ch_box6" id="ch_box6"/><label for="ch_box6">Гематолог</label><span className="count">(12 312)</span></div>
                        <div className="checkbox__box"><input type="checkbox" name="ch_box7" id="ch_box7"/><label for="ch_box7">Генетик</label><span className="count">(12 312)</span></div>
                        <div className="checkbox__box"><input type="checkbox" name="ch_box9" id="ch_box8"/><label for="ch_box8">Гинеколог</label><span className="count">(12 312)</span></div>
                        <div className="checkbox__box"><input type="checkbox" name="ch_box10" id="ch_box9"/><label for="ch_box9">Дерматолог</label><span className="count">(12 312)</span></div>
                        <div className="checkbox__box"><input type="checkbox" name="ch_box11" id="ch_box10"/><label for="ch_box10">Диетолог</label><span className="count">(12 312)</span></div>
                        <div className="checkbox__box"><input type="checkbox" name="ch_box12" id="ch_box11"/><label for="ch_box11">Инфекционист</label><span className="count">(12 312)</span></div>
                        <div className="checkbox__box"><input type="checkbox" name="ch_box13" id="ch_box12"/><label for="ch_box12">Кардиолог</label><span className="count">(12 312)</span></div>
                        <div className="checkbox__box"><input type="checkbox" name="ch_box14" id="ch_box13"/><label for="ch_box13">ЛОР</label><span className="count">(12 312)</span></div>
                        <div className="checkbox__box"><input type="checkbox" name="ch_box15" id="ch_box14"/><label for="ch_box14">Маммолог</label><span className="count">(12 312)</span></div>
                        <div className="checkbox__box"><input type="checkbox" name="ch_box16" id="ch_box15"/><label for="ch_box15">Нарколог</label><span className="count">(12 312)</span></div>
                    </div>
                </form>
            </div>
        </section>
     );
}
 
export default Filter;