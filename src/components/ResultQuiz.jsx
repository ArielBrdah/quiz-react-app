import { useContext } from "react"
import { QuizContext } from "../providers/QuizProvider"
import { ThemeContext } from "../providers/ThemeProvider"


function ResultQuiz() {
    const {quizCtx, setQuizCtx} = useContext(QuizContext)
    const {theme} = useContext(ThemeContext)


    const resetToStart = () => {
        setQuizCtx({...quizCtx, page: "start", score: 0})
    }

        return (
            <main className={`container row d-flex flex-row justify-content-center ${quizCtx.page == "result" ? "" : "d-none"}`} style={{marginTop: "99px"}}>
              <div className='col-lg-6'>
                <div className='d-flex flex-column justify-content-lg-start align-items-lg-start' style={{gap: "48px"}}>
                    <div className='lh-1'>
                      <h2 style={{fontSize: "64px", lineHeight: "100%"}} className='h1 fw-light'>Quiz completed</h2>
                      <h2 style={{fontSize: "64px", lineHeight: "100%"}} className='h1 fw-bold'>Your scored...</h2>
                    </div>
                </div>
              </div>
    
              <div className="col-lg-6 cards-list d-flex flex-column justify-content-center " style={{gap: "24px"}}>
                
                    <div className={` ${theme === "dark" ? "custom-bg-dark" : "bg-white" } card rounded-4 border-0 shadow d-flex flex-column align-items-center border border-2`} style={{height: "auto", gap: "40px", padding:"48px"}}>

                        <div className={`brand rounded-4 d-flex align-items-center justify-content-center ${ (quizCtx.page == "start") ? "d-none" : ""}`} style={{gap: "16px"}} >
                            <div className="brand-content rounded-2 d-flex align-items-center justify-content-center" style={{height: "56px", width: "56px" ,backgroundColor: quizCtx.bgTitle}}>
                                <img src={quizCtx.srcTitle} alt="logo" />
                            </div>
                            <span className='fw-bold' style={{fontSize: "28px"}}>{quizCtx.title}</span>
                        </div>

                        <div className='m-0 d-flex flex-column align-items-center justify-content-center' style={{gap: "16px"}}>
                            <h4 className='m-0' style={{fontSize: "144px", lineHeight: "100%"}}>{quizCtx.score}</h4>
                            <p className="m-0" style={{fontSize: "12px", lineHeight: "100%", color: theme === "dark" ? "#ABC1E1" : "#626C7F"}}>out of { 10}</p>
                        </div>

                    </div>
                    <div>
                        <button onClick={resetToStart} className="btn btn-primary w-100 d-flex align-items-center justify-content-center rounded-4" style={{height: "92px", width: "562px", padding: "32px", fontSize: "28px", fontWeight: "semibold"}}>Play Again</button>
                    </div>
              </div>
            </main>
        )
}

export default ResultQuiz;