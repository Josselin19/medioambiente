import React from 'react';
import Navabar from './Components/Navabar/Navabar';
import Slider from './Components/Slider/Slider';
import CardEnvironment from './Components/Card-Environment/CardEnvironment';
import Footer from './Components/Footer/Footer';
import Evidencia from './Components/Evidencia/Evidencia';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
function App() {
  return (
    <div className="App">
      < Navabar />
      <Slider />
      <CardEnvironment />
      <Evidencia />
      <About />
<Contact />

      <Footer />
    </div>
  );
}

export default App;
