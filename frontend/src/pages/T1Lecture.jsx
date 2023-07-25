import { Container } from "react-bootstrap";
import {Navigate, useNavigate} from 'react-router-dom';
import "./T1Lecture.css";

export default function T1Lecture() {
    const navigate = useNavigate()
	
	const handleGoBack = () => {
		navigate(-1);
	}

    return <div>
        <Container className="videocontainer">
            <h1>Pre-Calculus Lecture Video</h1>
            <div className="videoWrapper" align="center">
                <iframe width="840" height="472" src="https://www.youtube.com/embed/1m9p9iubMLU" title="Youtube Video" allowFullScreen></iframe>
                <div className="buttonWrapper">
                    <button className='round-button' onClick={handleGoBack}>Go Back</button>
                </div>
            </div>
        </Container>
    </div>
}