import React from 'react';
import PropTypes from 'prop-types';
import roadmap from '../images/roadmap.png';
import whitepaper from '../images/whitepaper.png';


const Footer = (props) => (
    
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        
        <div className="social-icons">
            <div className="hexagon-wrapper">
                <div className="hexagon">
                    <i className="fa fa-twitter"></i>
                </div>
            </div>
            <div className="hexagon-wrapper">
                <div className="hexagon">
                    <img src={roadmap} height="50px" width="50px" className="papers"></img>
                </div>
            </div>
           <div className="hexagon-wrapper">
                <div className="hexagon">
                    <img src={whitepaper} height="50px" width="50px" className="papers"></img>
                </div>
            </div>
           
            <div className="hexagon-wrapper">
                <div className="hexagon">
                    <i className="fa fa-github"></i>
                </div>
            </div>
        </div>

    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}



export default Footer
