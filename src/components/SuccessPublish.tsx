import React from "react";
import { motion } from "framer-motion";
import "../style/succespublish.css";
import CustomizationTab from "./CustomizationTab";

const image = new URL("../assets/customizationscreenshot.svg", import.meta.url).href;
const whitearrow = new URL("../assets/→.svg", import.meta.url).href;

type SuccessPublishProps = {
    onGoBack: () => void;
    handleCustomize: () => void;
};

const SuccessPublish: React.FC<SuccessPublishProps> = ({ onGoBack, handleCustomize }) => {

    return (
        <>

            <div className="success-overlay">
                <motion.svg
                    className="success-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                    initial="hidden"
                    animate="visible"
                >
                    {/* Inner filled circle */}
                    <circle
                        cx="26"
                        cy="26"
                        r="21"
                        fill="rgba(140, 121, 255, 1)"
                    />

                    {/* Outer animated circle */}
                    <motion.circle
                        cx="26"
                        cy="26"
                        r="25"
                        fill="none"
                        stroke="rgba(140, 121, 255, 1)"
                        strokeWidth="2.5"
                        strokeDasharray="157" // circumference = 2 * π * r = ~157
                        strokeDashoffset="157"
                        initial={{ strokeDashoffset: 157 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />

                    {/* Checkmark */}
                    <motion.path
                        fill="none"
                        stroke="rgba(33, 30, 57, 1)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 27l7 7 16-16"
                        variants={{
                            hidden: { pathLength: 0 },
                            visible: {
                                pathLength: 1,
                                transition: { duration: 0.6, ease: "easeInOut", delay: 0.8 },
                            },
                        }}
                    />
                </motion.svg>
                <p className="success-message">Successfully published to your site</p>
                <div className="success-screen">
                    <div className="customize-section">
                        <div className="customize-left">
                            <span>Want to customize further?</span><br />
                            <span>Match the widget to your brand with:</span>
                            <ul>
                                <li>Brand colors and alignment</li>
                                <li>Smooth animations</li>
                                <li>Region-specific compliance settings</li>
                            </ul>
                            <button className="customize-btn" onClick={handleCustomize}>
                                Start Customizing <img style={{width:"12px"}} src={whitearrow} alt="" />
                            </button>
                        </div>
                        <div className="customize-right">
                            <img src={image} alt="Customization Preview" />
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default SuccessPublish;
