import React from 'react';
import ImageContainer from './components/ImageContainer';
import Button from '@mui/material/Button';

const App = () => {
    return (
        <div className="container">
            {/* Image Container */}
            <ImageContainer />
            
            {/* Content Container */}
            <div className="content-container">
                <h1>Join a Paid Channel</h1>
                <div className="button-container">
                    <Button variant="contained" className="gold-button">Gold</Button>
                    <Button variant="contained" className="forex-button">Forex</Button>
                    <Button variant="contained" className="crypto-button">Crypto</Button>
                </div>
                <div className="launch-info">
                    <p>Launching</p>
                    <p>NOVEMBER 1st</p>
                    <p>SIGN UP TODAY TO AVOID THE WAITING LIST:</p>
                </div>
                <form action="https://websimengine.com/submit" method="post">
                    <div className="form-group">
                        <label htmlFor="name">NAME</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">EMAIL</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-email">CONFIRM EMAIL</label>
                        <input type="email" id="confirm-email" name="confirm-email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="referral">REFERRAL CODE</label>
                        <input type="text" id="referral" name="referral" />
                    </div>
                    <input type="submit" value="SUBMIT" />
                </form>
                <h2 style={{color: "white"}}>Limited Time Offer:
                </h2>

                <h2 style={{color: "white"}}>$12/month</h2>
            </div>
        </div>
    );
};

export default App;