import "react-datepicker/dist/react-datepicker.css";
import "./schedule.css";

import React, { useState } from "react";

import DatePicker from "react-datepicker";

const Schedule = () => {
  // State to store the name input value
  const [name, setName] = useState("");

  // State to store the selected schedule type
  const [scheduleType, setScheduleType] = useState("Type1");

  // State to manage the checkbox status
  const [enabled, setEnabled] = useState(true);

  // State to track whether "No End Date" is selected
  const [noEndDateSelected, setNoEndDateSelected] = useState(true);

  // State to store the selected end date
  const [endDate, setEndDate] = useState(null);

  // State to store the selected date and time
  const [selectedDate, setSelectedDate] = useState("2023-09-24");
  const [selectedTime, setSelectedTime] = useState("12:00 PM");

  // State for start date
  const [startDate, setStartDate] = useState(new Date());

  // State for timer values (hours, minutes, seconds)
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [showDialog, setShowDialog] = useState(true);

  const handleCancelClick = () => {
    setShowDialog(false);
  };

  // State to store the textarea content
  const [textareaContent, setTextareaContent] = useState("");

  // Function to handle timer increment
  const incrementTimer = () => {
    if (seconds < 59) {
      setSeconds(seconds + 1);
    } else if (minutes < 59) {
      setMinutes(minutes + 1);
      setSeconds(0);
    } else {
      setHours(hours + 1);
      setMinutes(0);
      setSeconds(0);
    }
  };

  // Function to handle timer decrement
  const decrementTimer = () => {
    if (hours > 0 || minutes > 0 || seconds > 0) {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      }
    }
  };

  return (
    <div
      className={`schedule-container ${
        showDialog ? "show-dialog" : "hide-dialog"
      }`}
    >
      <div className="header">
        <div>Job Schedule Properties - Hourly - On the Half</div>
        <div className="header-subContainer">
          <span>-</span>
          <span></span>
          <span className="close" onClick={handleCancelClick}>
            x
          </span>
        </div>
      </div>
      <div style={{ width: "90%" }}>
        <div className="grid-container">
          <label className="first">Name: </label>

          <input
            className="second"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <button className="third" disabled>
            Jobs in Schedule
          </button>
        </div>
        <div className="grid-container">
          <label>Schedule Issue: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <div>
            <label>
              <input
                type="checkbox"
                value="end-date"
                checked={!noEndDateSelected}
                onChange={() => setNoEndDateSelected(false)}
              />
              Enabled
            </label>
          </div>{" "}
        </div>
        <div className="container">
          <p>one-time occurence</p> <div></div>
        </div>
        <div className="grid" style={{ display: "flex" }}>
          <label className="first">Date </label>
          <select
            style={{ width: "25%" }}
            value={scheduleType}
            onChange={(e) => setScheduleType(e.target.value)}
          >
            <option value="Type1">Type 1</option>
            <option value="Type2">Type 2</option>
            <option value="Type3">Type 3</option>
          </select>
          <label className="first">Time </label>
          <div className="timer">
            <input
              className="third"
              type="text"
              value={`${String(hours).padStart(2, "0")}:${String(
                minutes
              ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
              readOnly
            />
            <div className="button-container">
              <span onClick={incrementTimer}>&#9650;</span>
              <span onClick={decrementTimer}>&#9660;</span>
            </div>
          </div>
        </div>
        <div className="container">
          <p>Frequency</p> <div></div>
        </div>
        <div className="grid-container">
          <label className="first">Occurs </label>
          <select
            className="second"
            value={scheduleType}
            onChange={(e) => setScheduleType(e.target.value)}
          >
            <option value="Type1">Type 1</option>
            <option value="Type2">Type 2</option>
            <option value="Type3">Type 3</option>
          </select>
        </div>
        <div className="grid-container">
          <label className="first">Recurs every </label>

          <div className="timer">
            <input
              style={{ width: "97%" }}
              className="third"
              type="text"
              value={`${String(hours).padStart(2, "0")}:${String(
                minutes
              ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
              readOnly
            />
            <div className="button-container">
              <span onClick={incrementTimer}>&#9650;</span>
              <span onClick={decrementTimer}>&#9660;</span>
            </div>
          </div>
        </div>
        <div className="container">
          <p>Daily Frequency</p> <div></div>
        </div>
        <div className="grid-container">
          <div className="first">
            <label>
              <input
                type="radio"
                value="no-end-date"
                checked={noEndDateSelected}
                onChange={() => setNoEndDateSelected(true)}
              />
              Occurs once at
            </label>
          </div>
          <div className="timer">
            <input
              className="third"
              style={{ width: "97%" }}
              type="text"
              value={`${String(hours).padStart(2, "0")}:${String(
                minutes
              ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
              readOnly
            />
            <div className="button-container">
              <span onClick={incrementTimer}>&#9650;</span>
              <span onClick={decrementTimer}>&#9660;</span>
            </div>
          </div>
        </div>
        <div className="grid">
          <div className="first">
            <label>
              <input
                type="radio"
                value="no-end-date"
                checked={noEndDateSelected}
                onChange={() => setNoEndDateSelected(true)}
              />
              Occurs every
            </label>
          </div>
          <div style={{ display: "flex" }} className="third">
            <div className="timer">
              <input
                type="text"
                value={`${String(hours).padStart(2, "0")}:${String(
                  minutes
                ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
                readOnly
              />
              <div className="button-container">
                <span onClick={incrementTimer}>&#9650;</span>
                <span onClick={decrementTimer}>&#9660;</span>
              </div>
            </div>
            <div style={{ margin: "0px 10px" }}>
              <select
                value={scheduleType}
                onChange={(e) => setScheduleType(e.target.value)}
              >
                <option value="Type1">Type 1</option>
                <option value="Type2">Type 2</option>
                <option value="Type3">Type 3</option>
              </select>
            </div>
            <div>
              <div
                className="timer"
                style={{
                  display: "flex",
                  marginBottom: 5,
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <label>Starting at:</label>
                <input
                  className="third"
                  type="text"
                  value={`${String(hours).padStart(2, "0")}:${String(
                    minutes
                  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
                  readOnly
                />
                <div className="button-container" style={{ top: 1 }}>
                  <span onClick={incrementTimer}>&#9650;</span>
                  <span onClick={decrementTimer}>&#9660;</span>
                </div>
              </div>
              <div
                className="timer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <label>Ending at:</label>
                <input
                  className="third"
                  type="text"
                  value={`${String(hours).padStart(2, "0")}:${String(
                    minutes
                  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`}
                  readOnly
                />
                <div className="button-container" style={{ top: 1 }}>
                  <span onClick={incrementTimer}>&#9650;</span>
                  <span onClick={decrementTimer}>&#9660;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <p>Duraction</p> <div></div>
        </div>

        <div className="grid">
          <div>
            <label style={{ marginRight: 4 }}>Start Date:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <input
                type="radio"
                value="no-end-date"
                checked={noEndDateSelected}
                onChange={() => setNoEndDateSelected(true)}
              />
              <label style={{ marginRight: 4 }}>End Date:</label>

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div>
              <input
                type="radio"
                value="no-end-date"
                checked={noEndDateSelected}
                onChange={() => setNoEndDateSelected(true)}
              />
              <label style={{ marginRight: 4 }}>no End Date:</label>
            </div>
          </div>
        </div>
        <div className="container-sc">
          <p>Summary</p> <div></div>
        </div>

        <div>
          <div className="grid">
            <label className="first" style={{marginRight: 10}}>Description:</label>

            <textarea
              className=""
              style={{width: "100%"}}
              value={textareaContent}
              onChange={(e) => setTextareaContent(e.target.value)}
              placeholder="Enter your comments here"
              rows={4}
              cols={50}
            />
          </div>
        </div>
        <div style={{display: "flex"}}>
          <div style={{marginLeft: "auto"}}>
            <button>ok</button>
            <button onClick={handleCancelClick}>Cancel</button>
            <button>help</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
