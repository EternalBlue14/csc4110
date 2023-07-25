import { Container } from "react-bootstrap";


export default function UCLecture() {
    return <div>
        <Container>
            <h1>Unit Conversions Lecture Video</h1>
            <div className="videoWrapper" align="center">
                <iframe width="840" height="472" src="https://www.youtube.com/embed/jFSenp9ueaI" title="Youtube Video" allowFullScreen></iframe>
            </div>
        </Container>
    </div>
}