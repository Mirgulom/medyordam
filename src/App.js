
import './App.scss';
import Consultation from './components/Consultation/Consultation';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Consultation/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
