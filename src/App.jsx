import './App.css';
import { useEffect, useState } from "react";
import Introduction from './components/Introduction';
import Bio from './components/Bio';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';
import Highlights from './components/Highlights';

function App() {

  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if(window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return() => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <div className="max-w-4xl m-auto relative">
      <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
        <Introduction></Introduction>
      </header>
      <main className="relative mt-28">
        <Bio></Bio>
        <Services></Services>
        <Highlights></Highlights>
        <Technologies></Technologies>
        <Skills></Skills>
        <About></About>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  )
}

export default App
