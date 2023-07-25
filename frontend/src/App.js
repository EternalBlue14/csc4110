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
import Logout from "./pages/Logout";
import T1Lecture from "./pages/T1Lecture";
import UCLecture from "./pages/UCLecture";
import Quiz2 from "./pages/Quiz2";
import Quiz3 from "./pages/Quiz3";
import Algebra from "./pages/Algebra";
import ALecture from "./pages/ALecture";


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
          <Route path="/Logout" element={<Logout />} />
          <Route path="/UnitConversions" element={<UnitConversions />} />
          <Route path="/About" element={<About />}/>
          <Route path="/Signup" element={<Signup />}/>
          <Route path="/Topic1/Quiz" element={<Quiz />} />
          <Route path="/UnitConversions/Quiz" element={<Quiz />} />
          <Route path="/Topic1/T1Lecture" element={<T1Lecture />} />
          <Route path="/UnitConversions/UCLecture" element={<UCLecture />} />
          <Route path="/Topic1/Quiz2" element={<Quiz2 />} />
          <Route path="/UnitConversions/Quiz2" element={<Quiz2 />} />
          <Route path="/UnitConversions/Quiz3" element={<Quiz3 />} />
          <Route path="/Topic1/Quiz3" element={<Quiz3 />} />
          <Route path="/Algebra" element={<Algebra />} />
          <Route path="/Algebra/Quiz" element={<Quiz />} />
          <Route path="/Algebra/Quiz2" element={<Quiz2 />} />
          <Route path="/Algebra/Quiz3" element={<Quiz3 />} />
          <Route path="/Algebra/ALecture" element={<ALecture />} />
          
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
