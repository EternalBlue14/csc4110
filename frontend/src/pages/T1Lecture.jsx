import { Container } from "react-bootstrap";
import "./T1Lecture.css";

export default function T1Lecture() {
    return <div>
        <Container>
            <h1>Pre-Calculus Lecture Video</h1>
            <div className="videoWrapper" align="center">
                <iframe width="840" height="472" src="https://www.youtube.com/embed/1m9p9iubMLU" title="Youtube Video" allowFullScreen></iframe>
            </div>
        </Container>
    </div>
}