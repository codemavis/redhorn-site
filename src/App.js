import Header from './components/Header';
import Intro from './components/Intro';
import FeaturedServices from './components/FeaturedServices';
import About from './components/About';
import Services from './components/Services';
import CallToAction from './components/CallToAction';
import Skills from './components/Skills';
import Facts from './components/Facts';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <main id="main">
        <FeaturedServices />
        <About />
        <Services />
        {/* <CallToAction /> */}
        {/* <Skills /> */}
        {/* <Facts /> */}
        <Portfolio />
        {/* <Clients /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
