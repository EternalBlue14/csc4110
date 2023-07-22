import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

//import logo from './logo.svg';
//import logo from './sblogo.png';
import Header from './components/Header';
import './App.css';
import Sidenav from './components/Sidenav';
import Topic1 from "./pages/Topic1";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Login from './pages/login';
import Signup from './pages/Signup';
import Quiz from "./pages/Quiz";


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Sidenav />
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/Topic1" element={<Topic1 />} />
          <Route path="/About" element={<About />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/Topic1/Quiz" element={<Quiz />} />
        </Routes>
      </main>
    </div>
  );
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
