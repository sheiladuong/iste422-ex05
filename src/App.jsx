import './App.css'
import Logo from './assets/logo.png';
import About from './components/About.jsx'
import People from './components/People.jsx'
import Degrees from './components/Degrees.jsx'
import Minors from './components/Minors.jsx'
import Employment from './components/Employment.jsx'

const App = () => {
  return (
    <div className="main-container">
        <nav className="navbar">
          <div className="navbar-content">
            <a href="#about">
            <img src={Logo} alt="Logo" className="navbar-logo" />
            </a>
            <div className="nav-list">
              <div className="nav-item"><a href="#about">About</a></div>
              <div className="nav-item"><a href="#degrees">Degrees</a></div>
              <div className="nav-item"><a href="#minors">Minors</a></div>
              <div className="nav-item"><a href="#employment">Employment</a></div>
              <div className="nav-item"><a href="#people">People</a></div>
            </div>
          </div>
        </nav>
      <div>
        {/* Components */}
        <About/>
        <Degrees/>
        <Minors/>
        <Employment/>
        <People/>
      </div>
    </div>
  )
}

export default App
