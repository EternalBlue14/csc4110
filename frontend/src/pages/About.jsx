import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <html>
      <head>
        <title>About Us</title>
      </head>
      <body>
        <div className="container">
          <h3>About Study Buddy:</h3>
          <p>
            Our objective is to create a web application for students to learn math topics of their choosing. We provide interactive modules containing learning content and quizzes. The easy-to-use interface and website optimizations are what make our application marketable in today's competitive world.
          </p>
        </div>

        <div className="motivation-box">
          <h3>These are some motivating factors that made this application possible!</h3>
        </div>
        <div className="green-container">
          <div className="assist-box">
            <h3>1) We wanted to assist in the academic space!</h3>

            <p>This is the foundation that allowed us to create Study Buddy!</p>
            <img
              src="/School.png"
              alt="Cartoon School"
              style={{
                maxWidth: "200px",
                maxHeight: "130px",
                margin: "0 auto",
                display: "block"
              }}
            />
          </div>

          <div className="research-box">
            <h3>2) We dedicated hours of research toward our web application!</h3>
            <p>We ensured that our application is optimized and responsive!</p>
            <img
              src="/Person_Typing.png"
              alt="Software Development"
              style={{
                maxWidth: "200px",
                maxHeight: "130px",
                margin: "0 auto",
                display: "block"
              }}
            />
          </div>

          <div className="quality-box">
            <h3>3) We aim at creating high-quality products</h3>
            <p>We wanted our application to have a professional, simple layout for your viewing experience!</p>
            <img
              src="/Cartoon_New_Target.png"
              alt="Cartoon Target"
              style={{
                maxWidth: "200px",
                maxHeight: "130px",
                margin: "0 auto",
                display: "block"
              }}
            />
          </div>
        </div>

        <div className="discord-box"> {/* New box */}
          <h3 style={{ textAlign: "center" }}>Join our Discord community for discussions and updates!</h3>
          <a href="https://discord.gg/YVur2PPSQQ">
            <img
              src="/Discord_Transparent.png"
              alt="Discord Logo"
              style={{
                maxWidth: "200px",
                maxHeight: "130px",
                margin: "0 auto",
                display: "block"
              }}
            />
          </a>
          <p style={{ textAlign: "center" }}>Stay connected with Study Buddy and other users!</p>
        </div>

        <div className="members-container">
          <h4>Group Members:</h4>
          <p>
            Austin Burns<br />
            Derrick Hornes<br />
            Deryk Dantes<br />
            Spencer Martinez<br />
            William Esparza
          </p>
        </div>

        <div className="tan-box">
          <Link to="/Login">Go to Dashboard</Link>
        </div>
      </body>
    </html>
  );
}
