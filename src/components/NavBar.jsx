import {  useContext, useEffect } from 'react'
import { ThemeContext } from '../providers/ThemeProvider.jsx'
import iconMoonLight from '../assets/images/icon-moon-light.svg'
import iconMoonDark from '../assets/images/icon-moon-dark.svg'
import iconSunLight from '../assets/images/icon-sun-light.svg'
import iconSunDark from '../assets/images/icon-sun-dark.svg'

function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext)

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {

    const setBodyTheme = () => {
      document.body.setAttribute('data-bs-theme', theme)
    }

    setBodyTheme()
  }, [theme])

  return (
    <>
      <div className="container" style={{paddingTop: "97px"}}>
        <nav className="nav">

        <div className="ms-auto form-check form-switch d-flex align-items-center justify-content-center p-0" style={{ gap: '16px' }}>
          <label className="form-check-label" for="changeTheme">
            <img width="24" height="24" src={theme === 'light' ? iconSunDark : iconSunLight} alt="theme" />
          </label>

          <div className="form-check-lg form-switch m-0 d-flex align-items-center justify-content-center">
            <input className="form-check-input" type="checkbox" role="switch" id="changeTheme" onChange={changeTheme} 
            style={{ width: '48px', height: '28px', border: 'none', outline: 'none'}}/>
          </div>

          <label className="form-check-label" for="changeTheme">
            <img width="24" height="24" src={theme === 'light' ? iconMoonDark : iconMoonLight} alt="theme" />
          </label>
        </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar  