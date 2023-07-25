import Topiclabel from "../components/Topiclabel";
import ModuleButton from "../components/ModuleButton";
import FinalModuleButton from "../components/FinalModuleButton";
import { Link } from 'react-router-dom';
import { Fragment } from "react";
import QuizContainer from "../components/QuizContainer";
import React, {useState} from "react";
import './Topic1.css';

export default function Topic1() {

    const [showQuiz, setShowQuiz] = useState(false);

    const handleModuleClick = () => {
      console.log('Module button clicked');
      setShowQuiz(true);
    }

    return (
      //<><h2>Topic1</h2><ModuleButton /><FinalModuleButton /></>

      <>
         <div className='topicname'>
           <h2>Pre-Calculus</h2>
         </div>
  
         <div className='topic-container'>
           <div className='modulebutton1'>
             {/* <ModuleButton onClick={handleModuleClick} /> */}
             <Link to="/Topic1/T1Lecture">
              <ModuleButton>Lecture</ModuleButton>
             </Link> 
             

           </div>
  
           <div className='modulebutton2'>
             <Link to="/Topic1/Quiz">
              <ModuleButton>Quiz 1</ModuleButton>
             </Link>
           </div>
  
           <div className='modulebutton3'>
             {/* <ModuleButton onClick={handleModuleClick} /> */}
             <Link to="/Topic1/Quiz2">
              <ModuleButton>Quiz 2</ModuleButton>
             </Link>
           </div>
  
           <div className='finalmodulebutton'>
            <Link to="/Topic1/Quiz3">
              <FinalModuleButton>Quiz 3</FinalModuleButton>
            </Link>
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

    //   <>
    //   <div className='topicname'>
    //     <h2>Topic1</h2>
    //   </div>

    //   <div className='topic-container'>
    //     <div className='modulebutton1'>
    //       <ModuleButton onClick={handleModuleClick} />
    //     </div>

    //     <div className='modulebutton2'>
    //       <ModuleButton onClick={handleModuleClick} />
    //     </div>

    //     <div className='modulebutton3'>
    //       <ModuleButton onClick={handleModuleClick} />
    //     </div>

    //     <div className='finalmodulebutton'>
    //       <FinalModuleButton />
    //     </div>
    //   </div>

    //   {showQuiz && <QuizContainer />}
    // </>

      // <>
      //   <div className='topicname'>
      //     <h2>
      //       Topic1
      //     </h2>
      //   </div>
    
      //   <div className='modulebutton1' style={{ marginLeft: 100}}>
      //     {/* <Link to="/Topic1/Quiz">  
      //     <ModuleButton />
      //     </Link> */}
      //     <ModuleButton onClick={handleModuleClick} />
      //     {/* <ModuleButton /> */}

      //   </div>

      //    <div className='modulebutton2' style={{ marginLeft: 250, marginTop: 150}}>
      //     {/* <Link to="/Topic1/Quiz">  
      //      <ModuleButton /> 
      //     </Link> */}
      //     <ModuleButton onClick={handleModuleClick} />

      //   </div>

      //   <div className='modulebutton3' style={{ marginLeft: 100, marginTop: 150}}>
      //     {/* <ModuleButton /> */}
      //     <ModuleButton onClick={handleModuleClick} />

      //   </div>
       
      //   <div className='finalmodulebutton' style={{ marginLeft: 250, marginTop: 300}}>
      //     <FinalModuleButton />
      //   </div>

      //   {showQuiz && <QuizContainer />}
      // </>