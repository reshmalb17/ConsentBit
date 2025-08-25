import React from "react";
import "../style/styless.css";


import { useAppState } from "../hooks/useAppState";
import WelcomeScipt from "./WelcomeScript";
import NeedHelp from "./NeedHelp";
const logo = new URL("../assets/icon.svg", import.meta.url).href;
const questionmark = new URL("../assets/question.svg", import.meta.url).href;
const leftLines = new URL("../assets/leftlines.svg", import.meta.url).href;
const rightLines = new URL("../assets/rightlines.svg", import.meta.url).href;

type WelcomeScreenProps = {
  onAuthorize: () => void;
  onNeedHelp: () => void;
  authenticated?:boolean;
  handleWelcomeScreen: () => void;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onAuthorize, onNeedHelp ,authenticated,handleWelcomeScreen}) => {

   return (
    <div className="welcome-screen">
      <div className="welcome-main-content">
        {/* Background line images */}
        <img src={leftLines} alt="" className="welcome-bg-lines-left" />
        <img src={rightLines} alt="" className="welcome-bg-lines-right" />

        {/* Header */}
        <div className="welcome-header">
          <div style={{ display: "flex", justifyContent: "flex-end" }}><NeedHelp /></div>
        </div>

        {/* Main content */}
        <div className="welcome-content">
          <h1 className="welcome-title">
            Welcome to{" "}
            <span className="welcome-title-highlight">Consentbit</span>
          </h1>
          {authenticated?( <p className="welcome-instructions">
            Scan your Webflow site, review detected scripts, add them to the
            backend, and publish when you're ready.
          </p>):( <p className="welcome-instructions">
            The authorization process appears to be incomplete. To continue with the next step, please ensure that all necessary authorization steps have been successfully carried out.
          </p>)}

        

          {authenticated ? (
            <button
              className="welcome-authorize-btn scan-project"
              onClick={handleWelcomeScreen}
            >
              Scan Project
            </button>
          ) : (
            <button className="welcome-authorize-btn" onClick={onAuthorize}>
              Authorize
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
