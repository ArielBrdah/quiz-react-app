import NavBar from './components/NavBar.jsx'
import ellipseDesktopDark from './assets/images/pattern-background-desktop-dark.svg'
import ellipseDesktopLight from './assets/images/pattern-background-desktop-light.svg'
import {ThemeContext} from './providers/ThemeProvider.jsx'
import {useContext} from 'react'

function App() {

  const {theme, setTheme} = useContext(ThemeContext)
  return (
    <>
    <div className="position-relative">
      <div className="container z-3">
        <NavBar />
        <main className='container row d-flex flex-row justify-content-center' style={{marginTop: "99px"}}>
          <div className='col-lg-6'>
            <div className='d-flex flex-column justify-content-lg-start align-items-lg-start' style={{gap: "48px"}}>
                <div className='lh-1'>
                  <h2 style={{fontSize: "64px", lineHeight: "100%"}} className='h1 fw-light'>Welcome to the</h2>
                  <h2 style={{fontSize: "64px", lineHeight: "100%"}} className='h1 fw-bold'>Frontend Quiz</h2>
                </div>
                <p className="fst-italic">Pick a subject to get started.</p>
            </div>
          </div>

          <div className="col-lg-6 cards-list d-flex flex-column justify-content-center " style={{gap: "24px"}}>
            <div className={`card shadow ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
              <div className="img-wrapper">
                <img src="" alt="" />
              </div>
              <div>
                <h4>HTML</h4>
              </div>
            </div>

            <div className={`card shadow ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
              <div className="img-wrapper">
                <img src="" alt="" />
              </div>
              <div>
                <h4>HTML</h4>
              </div>
            </div>

            <div className={`card shadow ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
              <div className="img-wrapper">
                <img src="" alt="" />
              </div>
              <div>
                <h4>HTML</h4>
              </div>
            </div>


            <div className={`card shadow ${theme === "dark" ? "bg-dark" : "bg-light"}`}>
              <div className="img-wrapper">
                <img src="" alt="" />
              </div>
              <div>
                <h4>HTML</h4>
              </div>
            </div>

          </div>
        </main>
      </div>
      <div className="ellipse position-absolute left-0 top-0 z-n1 d-xxl-none">
        <img style={{aspectRatio: "3 / 2"}} src={theme === "dark" ? ellipseDesktopDark : ellipseDesktopLight} alt="ellipse" />
      </div>
    </div>
      
    </>
  )
}

export default App
