import { useContext, useState } from "react"
import { ThemeContext } from "../providers/ThemeProvider.jsx"

function Quiz({questions}) {
    const {theme} = useContext(ThemeContext)
    const [hoverOption, setHoverOption] = useState(null)
    const [selectedOption, setSelectedOption] = useState(null)
    const [step, setStep] = useState(0)
    const [buttonText, setButtonText] = useState("Submit Answer")

    const imgIndex = ['A', 'B', 'C', 'D'];

    const enterSelection = (index) => {
        if(buttonText === "Next Question") return;
        return () => setHoverOption(index)
    }


    const leaveSelection = (index) => {

        if(buttonText === "Next Question") return;
        return () => setHoverOption()
    }

    const selectOption = (index) => {

        if(buttonText === "Next Question") return;
        return () => setSelectedOption(index)
    }

    const checkAnswer = () => {
        if(buttonText === "Next Question") {
            setStep(step + 1)

            setButtonText("Submit Answer");
            setSelectedOption(null);
            return;
        }
        setButtonText("Next Question");

    }



    return (
        <>
        {questions.map((question, index) => (
          <main key={index} className={`container row d-flex flex-row justify-content-center ${ step === index ? "" : "d-none"}`} style={{marginTop: "99px"}}>
            <div className='col-lg-6 d-flex flex-column justify-content-between' style={{maxHeight: "452px"}}>
                <div className='d-flex flex-column justify-content-lg-start align-items-lg-start' style={{gap: "27px"}}>
                    <p className="fst-italic">Question {index + 1} of {questions.length}.</p>
                    <div data-bs-theme={theme} className='lh-1'>
                        <h2 style={{fontSize: "36px", lineHeight: "100%", color: theme === "dark" ? "white" : "#313E51"}} className='h1 fw-semibold'>{question.question}</h2>
                    </div>
                </div>

                <div className="progress w-100" style={{ padding: "4px", maxWidth: "465px" }} role="progressbar">
                    <div className="progress-bar bg-primary rounded" style={{width: (((index+1) / questions.length) * 100) + "%"}}></div>
                </div>
            </div>

            <div className="col-lg-6 cards-list d-flex flex-column justify-content-center " style={{gap: "24px"}}>
                {question.options.map((option, optionIndex) => (
                    <div onMouseEnter={enterSelection(option+optionIndex)} onMouseLeave={leaveSelection(option+optionIndex)} onClick={selectOption(option+optionIndex)} key={option+optionIndex} 
                    className={`${theme === "dark" ? "custom-bg-dark" : "bg-white"}
                   
                    ${((selectedOption === (option+optionIndex)) && (option !== question.answer) && (buttonText === "Next Question")) ? "bad-answer" : ""}
                    ${((selectedOption === (option+optionIndex)) && (option === question.answer) && (buttonText === "Next Question")) ? "correct-answer" : ""}
                    
                    
                    card rounded-4 border-0 shadow d-flex flex-row align-items-center justify-content-between border border-2 border-primary ${selectedOption === option+optionIndex ? "selected-option" : ""}`} role="button" style={{height: "96px", gap: "32px", paddingLeft: "20px", paddingRight: "20px"}}>
                            <div data-bs-theme={theme} className={` img-wrapper rounded d-flex align-items-center justify-content-center ${hoverOption === option+optionIndex ? "text-primary" : "bg-light"}`} style={{minHeight: "56px", minWidth: "56px", color: "#626C7F", backgroundColor: hoverOption === option+optionIndex ? "#F6E7FF" : ""}}>
                                <p className={`d-flex align-items-center justify-content-center m-0 fw-medium`} style={{minHeight: "40px", minWidth: "40px", fontSize: "28px"}}>{imgIndex[optionIndex]}</p>
                            </div>
                            <div className="text-start w-100 m-0">
                                <p className="m-0" style={{fontSize: "28px", lineHeight: "100%", fontWeight: "400"}}>{option}</p>
                            </div>
                            <div data-bs-theme={theme} className={`icon-wrapper ${(selectedOption === option+optionIndex && buttonText == "Next Question") || (option === question.answer && buttonText == "Next Question") ? "show" : "visually-hidden"}`} >
                                <span>&nbsp;</span>
                                { option === question.answer ? <img className={`answer-icon `} src={"/src/assets/images/icon-correct.svg"} alt="correct" /> : <img className={`answer-icon `}  src={"/src/assets/images/icon-incorrect.svg"} alt="incorrect" />}
                            </div>
                    </div>
                ))}
                <button onClick={checkAnswer} className={`btn btn-primary fw-semibold ${selectedOption !== null ? "" : "disabled"}`} style={{width: "100%", height: "92px", borderRadius: "24px", fontSize: "28px", lineHeight: "100%"}}>{buttonText}</button>
            </div>
          </main>
        ))}
        </>
    )
}

export default Quiz