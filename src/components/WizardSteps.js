import React from 'react'

function WizardSteps(props) {
    const steps = [
        {num: 1, text : "CREATE YOUR ACCOUNT PASSWORD"},
        {num: 2, text : "PERSONAL INFORMATION"},
        {num: 3, text : "EMPLOYMENT DETAILS"},
        {num: 4, text : "UPLOAD DOCUMENTS"},
        {num: 5, text : "COMPLETE"},

    ]
    return (
        <>
            <div className="signup-steps">    
                    <div className="step-bar"></div> 

                    <div className="step-bullets">
                        
                        {steps.map(step => {
                            return(
                                <>
                                <div className="step">
                                    <div className={step.num <= props.user.step + 1 ? "bullet done" : "bullet"}>
                                        <h1><strong>{step.num}</strong></h1>
                                    </div>

                                    <div className={step.num <= props.user.step + 1 ? "text done-text" : "text"}>
                                        <h5>STEP {step.num}:</h5>
                                        <p>{step.text}</p>
                                    </div>
                                </div>
                                </>
                            )
                        })}
    
                    </div>
                    
                </div> 
        </>
    )
}

export default WizardSteps
