import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Examples from './components/Examples'
import Footer from "./components/Footer"
import Talks from './components/Talks'
import ReactGA from 'react-ga'
ReactGA.initialize('UA-198016970-2')
ReactGA.pageview(window.location.pathname)

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Header></Header>
      <div className="container mx-auto my-10 px-20">
        <About></About>
        <Examples></Examples>
        <Talks></Talks>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
