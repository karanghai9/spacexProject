import './ProgramDetails.css';
import Fade from 'react-reveal/Fade';

export default function ProgramDetails() {
    return(
        <>
            <h1 className="heading">DEDICATED ESPA CLASS<br></br>MISSIONS AS LOW AS $1M</h1>
 
            <div className="mission-details" key={1}>
                <Fade left key={'left'}>
                    <div>
                        <h2>THE PROGRAM</h2> 
                        <p>
                            SpaceX's SmallSat Rideshare Program will provide small satellite operators
                            with regularly scheduled, dedicated Falcon 9 rideshare missions to sun
                            synchronous orbit (SSO) for ESPA class payloads for as low as $1M per mission,
                            which includes up to 200 kg of payload mass.
                        </p>
                    </div>
                </Fade>
                <Fade right key={'right'}>
                    <div>
                        <h2>PAYLOADS</h2> 
                        <p>
                            For payloads who run into development or production challenges leading up to
                            launch, SpaceX will allow them to apply 100% of monies paid towards the cost
                            of rebooking on a subsequent mission, subject to a 10% rebooking fee.
                        </p> 
                    </div>
                </Fade>
            </div>
        </>
    )
}