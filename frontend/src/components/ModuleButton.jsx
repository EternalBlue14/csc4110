// use one button shape for all except the last in a unit
// will need to code a css change upon completion to grey it out

import './ModuleButton.css';
import { Circle } from 'react-awesome-shapes';

const ModuleButton = () => (
    <div className='modulebutton'>
        <Circle
            color="linear-gradient(135deg, #a5b4fc, #5A8EF4)"
            size={['150px', '150px', '150px', '150px']}
            zIndex={2}
        />
    </div>
    
  )
  export default ModuleButton;