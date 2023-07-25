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
import UnitConversions from "./pages/UnitConversions";
import T1Lecture from "./pages/T1Lecture";
import UCLecture from "./pages/UCLecture";


function App() {

  return (
    
    <div className="App">
      
      <Header />
      <main>
        <Sidenav />
        <Routes>
        <Route exact path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />}/>
          <Route path="/Topic1" element={<Topic1 />} />
          <Route path="/UnitConversions" element={<UnitConversions />} />
          <Route path="/About" element={<About />}/>
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/Topic1/Quiz" element={<Quiz />} />
          <Route path="/UnitConversions/Quiz" element={<Quiz />} />
          <Route path="/Topic1/T1Lecture" element={<T1Lecture />} />
          <Route path="/UnitConversions/UCLecture" element={<UCLecture />} />
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
