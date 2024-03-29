import logo from './logo.svg';
import Map from './components/Map';
import './App.css';
import "./styles/styles.css";

import Banner from "./components/Banner.js";
import Features from "./components/Features.js";
import Navbar from './components/NavBar.js';
import Services from "./components/Services.js";
import Impact from "./components/Impact.js";
import Footer from "./components/Footer.js";
import GoogleBlueButton from './components/GoogleLoginButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Banner />
        <Features />
        <Services />
        <Impact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
