import PropTypes from 'prop-types';
import React from 'react';
import logo from '../images/DataLrdzAlpha.png';

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
        <img  className="va-logo" src={logo} height="200px" width="200px"></img>
      
    </div>
    <div className="content">
      <div className="inner">
        <h1>TELIKOS</h1>
        <p>
          Ontological Analysis and Design of General Systems within Decentralized A.M.M Crypto-Architectures: D.A.O{' '}
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
