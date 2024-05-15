import Filter from "../filter/Filter";
import Messenger from "../messenger/Messenger";
import "./body.scss"

const Body = () => {
    return ( 
        <main className="body">
            <div className="container">
                <div className="body_container">
                    <Filter/>
                    <Messenger/>
                </div>
            </div>
        </main>
     );
}
 
export default Body;