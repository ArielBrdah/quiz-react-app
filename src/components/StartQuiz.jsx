import { useContext } from "react"
import { ThemeContext } from "../providers/ThemeProvider.jsx"
import { QuizContext } from "../providers/QuizProvider.jsx"
import iconHTML from '@assets/images/icon-html.svg'
import iconCSS from '@assets/images/icon-css.svg'
import iconJavaScript from '@assets/images/icon-javascript.svg'
import iconAccessibility from '@assets/images/icon-accessibility.svg'

function StartQuiz() {
    const {theme} = useContext(ThemeContext)
    const {quizCtx, setQuizCtx} = useContext(QuizContext)

    const handleQuiz = (title, src, bgCard) => {
     
        setQuizCtx({...quizCtx, title, srcTitle: src, bgTitle: bgCard, page: title, score: 0 })
    }
    return (
        <main className={`container row d-flex flex-row justify-content-center ${quizCtx.page == "start" ? "" : "d-none"}`} style={{marginTop: "99px"}}>
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
            
            {
              [{id:'HTML',bgCard: "#FFF1E9", icon: iconHTML}, {id:'CSS',bgCard: "#E0FDEF", icon: iconCSS}, {id:'JavaScript',bgCard: "#EBF0FF", icon: iconJavaScript}, {id:'Accessibility',bgCard: "#F6E7FF", icon: iconAccessibility  }].map((subject) => {
                return (
                  <div key={subject.id} onClick={() => handleQuiz(subject.id, subject.icon, subject.bgCard)} className={` ${theme === "dark" ? "custom-bg-dark" : "bg-white" } card rounded-4 border-0 shadow d-flex flex-row align-items-center border border-2 border-primary`} role="button" style={{height: "96px", gap: "32px", paddingLeft: "20px", paddingRight: "20px"}}>
                    <div className="img-wrapper rounded d-flex align-items-center justify-content-center" style={{height: "56px", width: "56px", backgroundColor: subject.bgCard}}>
                      <img className='rounded' src={subject.icon} alt={subject.id} style={{height: "40px", width: "40px"}} />
                    </div>
                    <div className='m-0'>
                      <h4 className='m-0'>{subject.id}</h4>
                    </div>
                  </div>
                )
              })
            }
           

          </div>
        </main>
    )
}

export default StartQuiz