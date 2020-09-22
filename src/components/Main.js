import PropTypes from 'prop-types'
import React from 'react'
// import pic01 from '../images/pic01.jpg'
// import pic02 from '../images/pic02.jpg'
// import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
              <h2 className="major">Intro</h2>
              <span className="image main">
                {/* <img src={pic01} alt="" /> */}
              </span>
              <p>
                TELIKOS 

                Introduction 
                  --DAOs., DeFi yearn 
                  -with programmable money, you can have money in constant lines of work. Active. AMA is just the beginning of using contracts in order to “self-driven virtuous incentive mechanism” which “creates vision for venture capital” manifests ventures into reality.
                
                 DAOs bring people together from various ecologies and create virtual governance mechanisms in the cybersphere. Every DAO that is created happens through self-ordering systems coming together. 
                 
                  The community provides the liquidity, the token-holders provide the governance infrastructure and thus the mechanism for operating the DAO, potentiating a system of collaboration and innovation. A major advantage of programmable liquidity is that your money does not have to be stagnant.
              </p>
          <p>
            As you read this, you will become more at ease while gaining an understanding of the cutting edge program we are putting into the world. We believe that vagueness is the enemy of genius and innovation. A clearness about the cycles that your money is running and the “real world” utility of the effort of the designers, users, and investors. We therefore want our scalable processes to be as clear and traceable to the [USER/READER/PARTICIPANT] as the processes of the Ethereum blockchain itself. 
              </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            {/* <img src={pic02} alt="" /> */}
          </span>
          <p>
            We are trying to bring in AMA mechanisms to stake potent ideas in order to manifest a bounty that the market will fulfill when the bounty reaches its price discovery. And the price discovery is captured through the ecology of contractors both human and artificial in order to fulfill the productive potential for new applications that is infact a new living technology separate from the governance system. A self. Created something from the void. Not simply the movement of money, it is productive capabilities stripped from bureaucracy and allowed to proliferate. A healthy growing entity. If the DAO can be motherly(chthonic) and conscious about what it is making. This is the lore. Our mission is to make this DAO a hotbed of innovation, an entropy stabilization mechanism. Self-driven. Like all entities; it wants to survive. Strive. Thrive. 
          </p>
          <p>
             Swerve. Governance by nature is a self-ordering mechanism. It provides, due to its survival instinct, a self-driven motive. You can harness these motives in order to take part in this mechanism. Examples like Swerve suggest that DAOS and governance are more reliable and trusting than other vertical infrastructures. 
          </p>
          {close}
        </article>

        <article
          
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <div className="img-wrapper">

          
           
           
           
           
           
           
          <h2 className="major">About</h2>
          <span className="image main">
            {/* <img src={pic03} alt="" /> */}
          </span>
          <p>
            Throughout the history of humanity, humans have been building and maintaining economic systems with which they evolve symbiotically. 
                  
                  Crises of technologies are opportunities for evolutions into niche ecologies. Having specific central crises such as the 2007-08 economic crisis was the soil that created the perfect composition for bitcoin to manifest. 
                  
                  Parabiosis necessary to stabilize the inflationary mechanism that was the crisis. Depictions of this have been seen throughout Chinese culture through idioms such as “crisis is opportunity” crisis/opportunity as sharing a logomatic shell, syntactical shell. In Legend. AKA. A similar crisis and opportunity is happening now. 
                  
                  Vertical sealings in economic infrastructures are parasitical. Pricing equity mechanisms are not in practice. As a matter of course, this vertical infrastructure creates costly bureaucratic (bulky, nesting dolls). 
                  
                  
                  This vertical infrastructure has created an environment of zombie corporations that need excessive lines of credit to maintain it, which in turn costs the American people (of the world) loads of money to maintain. This DAO, our DAO, is a dream fulfillment mechanism, first through generation of venture generating missions and second providing bounties for these visions to be fulfilled, a place where contractors can come without the impediment vertical infrastructure and thus able to have higher price discovery for self-driven utility. In essence the only boss is the competition for the bounty of a project. Effectively peeling away human potential from the confines of a cumbersome vertical system. 
                  
          </p>
            {close}
          </div>
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
