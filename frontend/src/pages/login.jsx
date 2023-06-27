import React from 'react';
import './login.css';

export default function StudyBuddy() {
  return (
    <div className="study-buddy-container">
      <img src="Study Buddy Logo.png" alt="Study Buddy Logo" />

      <div className="username-container">
        <label htmlFor="username">Enter Username/Email:</label>
        <br />
        <input type="text" id="username" name="username" />
      </div>

      <div className="password-container">
        <label htmlFor="password">Enter Password:</label>
        <br />
        <input type="password" id="password" name="password" />
      </div>

      <div className="submit-container">
        <button type="submit">Submit</button>
      </div>

      <div className="sections-container">
        <div className="take-time-section">
          <div className="content">
            <h2>Take your time!</h2>
            <img src="Clock.png" alt="Clock Box" />
            <p>You can learn at your own pace and take your time!</p>
          </div>
        </div>

        <div className="achieve-goals-section">
          <div className="content">
            <h2>Achieve Your Goals!</h2>
            <img src="Progress.png" alt="Progress Box" />
            <p>You can view your progress and see how much you improve!</p>
          </div>
        </div>

        <div className="plenty-of-material-section">
          <div className="content">
            <h2>Plenty of Material!</h2>
            <img src="Checklist.png" alt="Checklist Box" />
            <p>You can take quizzes and interact with various modules!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
