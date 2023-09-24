import "./App.css";

import React, { useEffect, useState } from "react";

import Schedule from "./scheduleProperty";
import loaderGif from './assests/loader.gif';

const App = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [timer, setTimer] = useState(0);
  const [countdown, setCountdown] = useState(null);
  const [stop, setStop] = useState(false);
  const [scheduling, setScheduling] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null); // Added a state to hold the timeout ID

  const handleRunClick = () => {
    setShowDialog(true);
    setLoading(true);
    setScheduling(false);

    setTimer(20); // Set the initial timer value (in seconds)

    // Create a countdown timer
    const countdownInterval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    setCountdown(countdownInterval);

    // Simulate a time-consuming process
    const timeoutId = setTimeout(() => {
      if (!stop) {
        setLoading(false);
        setSuccess(true);
        clearInterval(countdownInterval); // Clear the countdown timer when processing is done
      }
    }, 10000); // Updated to match the timer value

    // Store the timeout ID in state
    setTimeoutId(timeoutId);
  };

  const handleStopClick = () => {
    setStop(true);
    setTimer(0);
    setLoading(true);
    setSuccess(false);

    // Clear the countdown timer
    if (countdown !== null) {
      clearInterval(countdown);
    }

    // Clear the timeout if it exists
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
  };

  const handleCloseClick = () => {
    setLoading(false);
    setSuccess(false);
    setShowDialog(false);
    setTimer(0);

    // Clear the countdown timer
    if (countdown !== null) {
      clearInterval(countdown);
    }
  };

  const handleScheduledClick = () => {
    setScheduling(true);
    setShowDialog(false);
  };

  useEffect(() => {
    if (success) {
      // Add any logic for handling a successful process here
      console.log("Processing successful");
    }
  }, [success]);

  return (
    <div>
      <button onClick={handleRunClick}>Run</button>
      <button onClick={handleScheduledClick}>Schedule</button>
      <div className="App">
        {showDialog && (
          <div className="dialog">
            <>
              <div className="container">
                <div className="process-container">
                  {loading ? (
                    <>
                      {stop ? (
                        <div className="loading-spinner">
                          Processing Stopped...
                        </div>
                      ) : (
                        <div className="loading-spinner">
                          Processing operation...
                        </div>
                      )}
                      <div className="sub-spinner">
                        Click the stop button to interrupt the operation
                      </div>
                    </>
                  ) : (
                    <b>The execution was successful</b>
                  )}
                </div>
                <div className="sub-container">
                  {loading ? (
                    timer > 0 ? (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={loaderGif} alt="Loading" style={{ width: "30px", height: "30px", background: "white" }} />
                        {`${timer} remaining`}
                      </div>
                    ) : stop ? (
                      "Processing Stopped"
                    ) : (
                      "Processing completed"
                    )
                  ) : (
                    <div className="check-container">
                      {" "}
                      <div className="success-checkmark">
                        <div className="check-icon"></div>
                      </div>{" "}
                      <b>Success</b>
                    </div>
                  )}
                  <div className="grid-containers">
                    <div>18 Total</div>
                    <div>0 Error</div>
                    <div>2 Success</div>
                    <div>0 Warning</div>
                  </div>
                </div>
                <div className="table-container">
                  <div className="detail">Details</div>
                  <div className="table-sub-container">
                    <div className="subContainer">
                      <span></span>
                      <span>Process Name</span>
                      <span>Status</span>
                      <span>Message</span>
                      <span></span>
                    </div>
                    <div className="table"></div>
                  </div>
                </div>
              </div>
              <div className="stop-container">
                <button
                  disabled={!loading || stop}
                  className="stop-button"
                  onClick={handleStopClick}
                >
                  Stop
                </button>
              </div>
              <div className="close-container">
                <button className="close-button" onClick={handleCloseClick}>
                  Close
                </button>
              </div>
            </>
          </div>
        )}
        {scheduling && <Schedule />}
      </div>
    </div>
  );
};

export default App;
