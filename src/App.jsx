//import './App.css'
import About from './components/About'
import Education from './components/Education'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Project from './components/Projects'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function App() {

  return (
    <>
      <Navbar/>
      <Element name='page1'><Home/></Element>
      <Element name='page2'><About/></Element>
      <Element name='page3'><Education/></Element>
      <Element name='page4'><Project/></Element>
    </>
  )
}

export default App
