import { Container } from "react-bootstrap";
import {Navigate, useNavigate} from 'react-router-dom';


export default function UCLecture() {
    
    const navigate = useNavigate()
	
	const handleGoBack = () => {
		navigate(-1);
	}

    return <div>
        <Container className="videocontainer">
            <h1>Unit Conversions Lecture Video</h1>
            <div className="videoWrapper" align="center">
                <iframe width="840" height="472" src="https://www.youtube.com/embed/jFSenp9ueaI" title="Youtube Video" allowFullScreen></iframe>
                <div className="buttonWrapper">
                    <button className='round-button' onClick={handleGoBack}>Go Back</button>
                </div>
           
            </div>
        </Container>
    </div>
}