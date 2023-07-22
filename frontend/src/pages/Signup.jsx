import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { useSignup } from "../hooks/useSignup"

  

export default function Signup() {
  const [userName, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();

    //console.log(userName, password)
    await signup(userName, password)
  }

  return (

    <div className="study-buddy-container">
      <img src="/csc4110/frontend/public/Study Buddy Logo.png" alt="Study Buddy Logo" />

      <form className="signup" onSubmit={handleSubmit}>
        <div className="username-container">
          <label htmlFor="email">Enter your Email (Signup):</label>
          <br />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={userName}
          />
        </div>

        <div className="password-container">
          <label htmlFor="password">Enter Password:</label>
          <br />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div className="submit-container">
          <button disabled={isLoading}>Sign up</button>
          {error && <div className="error">{error}</div>}
        </div>
      </form>

      <div className="tan-box">
          <Link to="/Login">Switch to Login</Link>
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
