import Topiclabel from "../components/Topiclabel";
import ModuleButton from "../components/ModuleButton";
import FinalModuleButton from "../components/FinalModuleButton";
import { Link } from 'react-router-dom';
import { Fragment } from "react";

export default function Topic1() {
    return (
      //<><h2>Topic1</h2><ModuleButton /><FinalModuleButton /></>
      <>
        <div classname='topicname'>
          <h2>
            Topic1
          </h2>
        </div>
    
        <div classname='modulebutton1' style={{ marginLeft: 300}}>
          <Link to="/quiz_base">  
          <ModuleButton />
          </Link>
        </div>

         <div classname='modulebutton2' style={{ marginLeft: 600, marginTop: 200}}>
          <Link to="/quiz_base">  
          <ModuleButton />
          </Link>
        </div>

        <div classname='modulebutton3' style={{ marginLeft: -600, marginTop: 400}}>
          <ModuleButton />
        </div>
       
        <div classname='finalmodulebutton' style={{ marginLeft: 600, marginTop: 600}}>
          <FinalModuleButton />
        </div>
      </>


    )
  }