import { Container } from "react-bootstrap";
import {Navigate, useNavigate} from 'react-router-dom';


export default function ALecture() {
    
    const navigate = useNavigate()
	
	const handleGoBack = () => {
		navigate(-1);
	}

    return <div>
        <Container>
            <h1>Algebra Lecture Video</h1>
            <div className="videoWrapper" align="center">
                <iframe width="840" height="472" src="https://www.youtube.com/embed/FoTD41xzF5Q" title="Youtube Video" allowFullScreen></iframe>
                <button className='round-button' onClick={handleGoBack}>Go Back</button>
           
            </div>
        </Container>
    </div>
}