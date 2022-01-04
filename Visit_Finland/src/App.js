import './App.css';
import Vaasa from './vaasa';
import Jyvaskyla from './jyvaskyla';
import Rovaniemi from './rovaniemi';
import Nav from './nav';
import { render } from "react-dom";
import {BrowserRouter as Router, Switch,Routes , Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App" >
    
      <Nav/>
    <Routes>
      
      <Route path="/"exact element={<Home/>}/>
      <Route path="/vaasa" element={<Vaasa/>}/>
      <Route path="/jyvaskyla" element={<Jyvaskyla/>}/>
      <Route path="/rovaniemi" element={<Rovaniemi/>}/>
    </Routes>
    </div>
    </Router>
  );
}

const Home = () => {
  return( <div><body><div class="middle-container">
  <div class="middle-container-div">
    <h2>A day in Tampere</h2>
    <p>
      Follow along the Satakunnankatu street and over the rapids to end up
      in Finlayson area, also known as the old town of Tampere. This is
      where it all began for the city: textile factory being set up on the
      banks of the rapids. Finlayson area is basically a city within a city:
      walking under the main entrance you walk in the foot steps of
      thousands of past factory workers. If you want to know more of their
      story, Finnish Labour Museum Werstas has free admission to exhibitions
      including the original steam engine of Finlayson, at its original
      place in the engine room. In addition, while you are in the area, you
      should pop into the world’s first Spy Museum to test your spy skills.
    </p>
    <a
      href="https://visittampere.fi/en/articles/a-day-in-tampere/"
      target="_blank"
      >. . .</a
    >
  </div>
  <div class="middle-container-div">
    <h2>Hotels in the city centre of Tampere</h2>
    <p>
      In Tampere everything is close! Even if there is plenty to do all day
      and all night, you’ll enjoy your visit to Tampere more if you get a
      good night sleep. From the vast variety of city’s hotels you will
      definitely find the one to meet your needs. Most of the hotels are
      located right in the heart of the city. Take your pick and sleep
      tight!
    </p>
    <a
      href="https://visittampere.fi/en/articles/hotels-in-the-city-centre-of-tampere/"
      target="_blank"
      >. . .</a
    >
  </div>
  <div class="middle-container-div">
    <h2>Accommodation with a twist</h2>
    <p>
      The tallest hotel of Tampere is of course the “Tower”, officially Solo
      Sokos Hotel Torni Tampere. It’s actually the highest hotel in the
      whole country! The hotel is situated right next to Tampere railway
      station and it combines modern architecture with historical locomotive
      garages that have been turned into innovative meeting and party rooms.
      It’s all a celebration of local history and culture so even if you’re
      not staying overnight, pop in to Moro Sky Bar for a drink and a
      magnificent view over the city!
    </p>
    <a
      href="https://visittampere.fi/en/articles/accommodation-with-a-twist/"
      target="_blank"
      >. . .</a
    >
  </div>
  <div class="gallary-container">
    <h2>Gallery</h2>
    <div class="gallary-img">
      
      <img src="https://globalgrasshopper.com/wp-content/uploads/2020/03/Helsinki-Finland.jpg" alt="helsinki" />
      <img src="https://globalgrasshopper.com/wp-content/uploads/2020/03/Rovaniemi.jpg" alt="Rovaniemi" />
      <img src="https://globalgrasshopper.com/wp-content/uploads/2020/03/Utsjoki-Finland.jpg" alt="Utsjoki" />
    </div>
  </div>
</div>
</body>
</div>)  
}

export default App;
