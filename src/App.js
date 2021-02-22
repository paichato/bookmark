import Hero from "./Pages/Hero";
import GlobalStyles from './global.js'
import Features from "./Pages/Features";
import Extension from "./Pages/DExtension";
import FAQ from "./Pages/FAQ";
import Footer from "./Pages/Footer";
import Aos from 'aos';



function App() {
  Aos.init();
  return (
    <>
      <Hero/>
      <Features/>
      <Extension/>
      <GlobalStyles/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default App;
