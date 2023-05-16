import './App.css';
import NavigationBar from './Components/NavigationBar';
import './Style/LandingPage.css';
import Intro from './Components/Intro';
import Trending from './Components/Trending';
import SuperHero from './Components/SuperHero';

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className="MyBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* End Intro Section */}

      {/* Trending Section */}
      <div className="trending">
        <Trending />
      </div>
      {/* End Trending Section */}

      <div className="SuperHero">
        <SuperHero />
      </div>
    </div>
  );
}

export default App;
