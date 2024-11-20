"use client";

import React, { useState, useEffect } from 'react';
import { FaCheck } from "react-icons/fa6";

const IPOTimeline = ({ currentStep, numberOfSteps ,stepsData}) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check window size
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIsMobile();

    // Add event listener to update on resize
    window.addEventListener("resize", checkIsMobile);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

 

  const activeColor = (index) =>
    currentStep - 1 >= index ? 'bg-blue-500' : 'bg-gray-300';
  const tick = (index) =>
    currentStep - 1 >= index ? true : false;
  const isFinalStep = (index) => index === numberOfSteps - 1;

  return (
    <>
      <div className="flex items-center">
        {Array.from({ length: numberOfSteps }).map((_, index) => (
          <React.Fragment key={index}>
            {isMobile ? (
              <div className="stepWrapper">
                <div className={`step-count rounded-full ${activeColor(index)}`}>
                  <div className="icon">
                  {tick(index) ? <FaCheck color='white' fontSize={20}/>  : ""}
                  </div>
                </div>
                {!isFinalStep(index) && (
                  <div className={`stepRange h-1 ${activeColor(index)}`}></div>
                )}
              </div>
            ) : (
              <>
                <div className={`step-count rounded-full ${activeColor(index)}`}>
                  <div className="icon">
                    {tick(index) ? <FaCheck color='white' fontSize={20}/> : ""}
                  </div>
                </div>
                {!isFinalStep(index) && (
                  <div className={`stepRange h-1 ${activeColor(index)}`}></div>
                )}
              </>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="step-wrapper">
        {stepsData.map((step, index) => (
          <div key={index}>
            <p className="timeline-heading secondary">{step.title}</p>
            <span className='primary'>{step.date}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default IPOTimeline;
