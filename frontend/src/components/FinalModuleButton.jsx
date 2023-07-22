// this will be for the last button of a unit within a module, preferably
// a star shape
import './FinalModuleButton.css';
import { Star } from 'react-awesome-shapes';

const FinalModuleButton = () => (
    <div className='finalmodulebutton'>
        <Star
            size="150px"
            zIndex={2}
            color="linear-gradient(135deg, #D4AF37, #FDB811);"
        />
    </div>
    
  )
  export default FinalModuleButton;