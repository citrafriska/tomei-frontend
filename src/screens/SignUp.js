import React from "react";
import Header from "./../components/Header";
import {connect} from "react-redux"
import WizardSteps from "../components/WizardSteps";
import SignUpForm from "../components/SignUpForm";
import PersonalInformation from "../components/PersonalInformation";

function SignUp({user}) {
  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <Header />
        <WizardSteps user={user} />

        {user.step == 1 ? <PersonalInformation /> : <SignUpForm />}
      </div>
    </div>
  );
}

const stateToProps = state => ({
   user : state.user
})

export default connect(stateToProps, null)(SignUp);
