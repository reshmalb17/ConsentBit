import React, { useState } from "react";
import "../style/styless.css";
import "../style/confirmpublish.css";
import NeedHelp from "../components/NeedHelp";



const confirmIcon = new URL("../assets/confirmicon.svg", import.meta.url).href;
const CopyContent = new URL("../assets/copy.svg", import.meta.url).href;
const Previewtab = new URL("../assets/Previewtab.svg", import.meta.url).href;
const arrow = new URL("../assets/bluearrow.svg", import.meta.url).href;
const whitearrow = new URL("../assets/→.svg", import.meta.url).href;
const logo = new URL("../assets/icon.svg", import.meta.url).href;


type ConfirmPublishProps = {
  onGoBack: () => void;
  onProceed: () => void;
};

const ConfirmPublish: React.FC<ConfirmPublishProps> = ({ onGoBack, onProceed , }) => {
  const [isConfirmed, setIsConfirmed] = useState(true);

  return (
    <div className="publish-container">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}><NeedHelp /></div>
        {/* LEFT COLUMN */}
        <div className="content-container">
          <div className="publish-left">
            <button className="go-back-btn" onClick={onGoBack}><img className="whitearrow" src={whitearrow} alt="" /> Go back</button>

            <div className="payment-box">
              {/* Coupon Section */}
              <div className="coupon-box">
                <div className="coupon-container">
                  <p className="coupon-header">
                    Complete payment to publish cookie widget to the Live site
                  </p>

                  <div className="coupon-strip">
                    <div style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
                      <span>Get the app free for one year</span>
                      <span>coupon code - CONSENTBIT100</span>
                    </div>
                    {/* <img src={CopyContent} alt="copy" className="copy-icon" /> */}
                    <img
                      src={CopyContent}
                      alt="Copy"
                      className="copy-icon"
                      onClick={(event) => {
                        const img = event.currentTarget;
                        // img.style.opacity = "0.4";
                        navigator.clipboard.writeText("CONSENTBIT100")
                          .then(() => {
                            console.log("Text copied to clipboard");
                            setTimeout(() => {
                              img.style.opacity = "0.7"; 
                            }, 300);
                          })
                          .catch(() => {
                            const textArea = document.createElement("textarea");
                            textArea.value = "CONSENTBIT100";
                            document.body.appendChild(textArea);
                            textArea.select();
                            document.execCommand("copy");
                            document.body.removeChild(textArea);
                          });
                      }}
                      title="Copy"
                    />

                  </div>
                </div>

                <div style={{ width: "100%", borderTop: "1px solid rgba(140, 121, 255, 1)", display: "flex", justifyContent: "space-between" }}><div className="pay-container"> <button className="pay-now-btn">Pay now</button><img src={arrow} alt="" /></div></div>
              </div>


              <div className="note">
                <p className="note-star">*</p>
                <p className="note-text">
                  Complete the payment to publish cookie widget to the live site.
                  If payment is not made, it will only be published to the staging site.
                </p>
              </div>

              <button
                className="publish-btn"
                disabled={!isConfirmed}
                onClick={onProceed}
              >
                Publish
              </button>
            </div>

            <a href="/customize" className="customize-link">
              Customize <img src={arrow} alt="" />
            </a>
          </div>

          {/* RIGHT COLUMN - PREVIEW */}
          <div className="publish-right">

            <div className="preview-window">
              <img className="consentbit-icon" src={logo} alt="dots" />

              <div className="preview-header">Preview</div>
              {/* Browser mockup */}
              <div
                className="preview-content"
                style={{
                  background: `url(${Previewtab}) no-repeat center center`,
                  backgroundSize: "contain",   // keep proportions, full image
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center"
                }}
              >

                <div className="cookie-banner1">
                  <span className="cookie-title">Cookie Setting</span>
                  <p className="cookie-text">
                    We use cookies to provide you with the best possible experience.
                    They also allow us to analyze user behavior in order to
                    continually improve the website for you.
                  </p>
                  <div className="cookie-actions">
                    <button className="btns-preferences">Preferences</button>
                    <button className="btns-reject">Reject</button>
                    <button className="btns-accept">Accept All</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPublish;
