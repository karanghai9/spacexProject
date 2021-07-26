import './Footer.css';
import spaceXlogoFoot from '../../../Assets/SpaceX-Logo.svg';

export default function Footer() {
    return(
        <>
            <footer>
                <div className="footer-item">
                    <h4>CONTACTS</h4>
                    <div className="footer-options">
                        <div>+32 484 26 77 94</div>
                        <div>+32 484 26 77 94</div>
                        <div>info@spacex.com</div>
                    </div>
                </div>
                <div className="footer-item">
                    <h4>ABOUT</h4>
                    <div className="footer-options">
                        <div>About us</div>
                        <div>Careers</div>
                        <div>Shop</div>
                    </div>
                </div>
                <div className="footer-item">
                    <h4>SOCIAL MEDIA</h4>
                    <div className="footer-options">
                        <div>Facebook</div>
                        <div>Twitter</div>
                        <div>Vimeo</div>
                    </div>
                </div>  
                <div className="footer-item">
                    <h4>ROCKETS</h4>
                    <div className="footer-options">
                        <div>Falcon Heavy</div>
                        <div>Falcon 9</div>
                        <div>Falcon 1</div>
                    </div>
                </div>
                <div className="footer-item" style={{backgroundColor:`white`}}>
                    <div className="footer-item-last">
                        <h4 style={{textAlign:`center`}}>GET UPDATES</h4>
                        <p>Subscribe and get updates about our rocket launches and everything around SpaceX</p>
                        <label>Email</label><br></br>
                        <input className="subscribe" type="text" placeholder="example@impact.org"></input>
                        <button className="button">OK</button>
                    </div>
                </div> 
            </footer>
            <div className="footer-bottom">
                <p>© 2019 SPACE EXPLORATION TECHNOLOGIES CORP.</p><span><img className="logo-footer" src={spaceXlogoFoot} alt="logo"></img></span>
            </div>
        </>
    )
}