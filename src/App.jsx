import NavBar from './components/NavBar.jsx'
import ellipseDesktopDark from './assets/images/pattern-background-desktop-dark.svg'
import ellipseDesktopLight from './assets/images/pattern-background-desktop-light.svg'
import {ThemeContext} from './providers/ThemeProvider.jsx'
import {useContext, useState} from 'react'  
import StartQuiz from './components/StartQuiz.jsx'
import Quiz from './components/Quiz.jsx'
import quizData from './assets/data.json'
import { QuizContext } from './providers/QuizProvider.jsx'

function App() {

  const {theme, setTheme} = useContext(ThemeContext)
  const [quizIndex, setQuizIndex] = useState(0)
  const {quizCtx} = useContext(QuizContext)
  return (
    <>
    <div className="position-relative">
      <div className="container z-3">
        <NavBar />
        {quizCtx.page == "start" ? <StartQuiz /> : ""}
        {
          quizData.quizzes.map((quiz, index) => {
            console.log({quiz,index})
            if( quiz.title == quizCtx.title ){
              return (
                <div key={index} className={`${quizIndex == index ? "" : "d-none"}`}>
                  <Quiz key={index} questions={quiz.questions} />
                </div>
              )
            }
          })
        }
      </div>

      <div className="ellipse position-absolute left-0 top-0 z-n1 d-xxl-none">
        <img style={{aspectRatio: "3 / 2"}} src={theme === "dark" ? ellipseDesktopDark : ellipseDesktopLight} alt="ellipse" />
      </div>
    </div>
      
    </>
  )
}

export default App