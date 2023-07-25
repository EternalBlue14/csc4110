import Topiclabel from "../components/Topiclabel";
import ModuleButton from "../components/ModuleButton";
import FinalModuleButton from "../components/FinalModuleButton";
import { Link } from 'react-router-dom';
import { Fragment } from "react";
import QuizContainer from "../components/QuizContainer";
import React, {useState} from "react";
import './Topic1.css';

export default function UnitConversions() {

    const [showQuiz, setShowQuiz] = useState(false);

    const handleModuleClick = () => {
      console.log('Module button clicked');
      setShowQuiz(true);
    }
    return (
      //<><h2>Topic1</h2><ModuleButton /><FinalModuleButton /></>

      <>
         <div className='topicname'>
           <h2>UnitConversions</h2>
         </div>
  
         <div className='topic-container'>
           <div className='modulebutton1'>
             {/* <ModuleButton onClick={handleModuleClick} /> */}
             <Link to="/UnitConversions/UCLecture">
              <ModuleButton>Lecture</ModuleButton>
             </Link>

           </div>
  
           <div className='modulebutton2'>
             {/* <ModuleButton onClick={handleModuleClick} /> */}
             <Link to="/UnitConversions/Quiz">
              <ModuleButton>Quiz 1</ModuleButton>
             </Link>
           </div>
  
           <div className='modulebutton3'>
             {/* <ModuleButton onClick={handleModuleClick} /> */}
             <Link to="/UnitConversions/Quiz2">
              <ModuleButton>Quiz 2</ModuleButton>
             </Link>
           </div>
  
           <div className='finalmodulebutton'>
             <FinalModuleButton>Quiz 3</FinalModuleButton>
           </div>
         </div>
  
         {/* {showQuiz && <QuizContainer />} */}
      </>

    //   <>
    //   <div className='topicname'>
    //     <h2>Topic1</h2>
    //   </div>

    //   <div className='topic-container'>
    //     <ModuleButton onClick={handleModuleClick} className='modulebutton1' />
    //     <ModuleButton onClick={handleModuleClick} className='modulebutton2'/>
    //     <ModuleButton onClick={handleModuleClick} className='modulebutton3'/>
    //   </div>

    //   <div className='finalmodulebutton'>
    //     <FinalModuleButton />
    //   </div>

    //   {showQuiz && <QuizContainer />}
    // </>
      

    )
  }