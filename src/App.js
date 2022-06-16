import './App.css';
import Navbar from './components/nav/Navbar';
import Hero from './components/hero/Hero';
import Expierences from './components/expriencesText/ExpierenceText';
import MiniCard from './components/miniCard/MiniCard';
import Data from './Data.js';

function App() {
  const newEXP = Data.map(el =>{
    return el
  })
    return(
      <div className='main'>
        <div className='container-airbnb'>
          <Navbar/>
          <Hero/>
          <Expierences/>
          <div className='Container-minicards'>
            <MiniCard/>
          </div>
        </div>
      </div>
    )
}

export default App;
