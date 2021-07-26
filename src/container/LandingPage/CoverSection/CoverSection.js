import spaceX_video from '../../../Assets/video.mp4';
import './CoverSection.css';

export default function CoverSection() {
    return(
        <div className="head">
            <video loop id="myVideo" autoPlay muted>
                <source src={spaceX_video} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>

            <div className="content">
                <h1>SMALLSAT RIDESHARE PROGRAM</h1>
            </div>
        </div>
    )
}