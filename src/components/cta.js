import React, { Component } from 'react';
import img from '../images/watsonLogo.png'

const styles = {
  cta: {
    display: 'grid',
    gridTemplateColumns: '.5fr 1fr 1fr .5fr',
    alignItems: 'center',
    justifyItems: 'center',
    textAlign: 'center',
    minHeight: '200px',
  },
  image: {
    gridArea: 'img',
    width: '30%',
    margin: '2vw 0'
  },
  imageMobile: {
    gridArea: 'img',
    width: '90%',
    margin: '10vw 0'
  },
  buttonDiv: {
    gridArea: 'button',
  },
  text: {
    fontSize: '3vw',
    lineHeight: '3vw',
    textShadow: '2px 2px 5px',
  },
  textMobile: {
    fontSize: 'calc(3vw + 20px)',
    lineHeight: '7vw',
    textShadow: '2px 2px 5px',
  },
  emailLink: {
    textDecoration: 'none',
    color: '#323232',
    textShadow: '2px 2px 1px #1CBCAC'
  }
}

class CTA extends Component {
  state = { 
    mobile: false,
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    // console.log('resizing')
    if(window.innerWidth < 960) {
      this.setState({ mobile: true })
    }
    else {
      this.setState ({ mobile: false })
    }
  }


  render () {
    return (
        <div className='cta-div' style={styles.cta}>
          <img src={img} alt="Christopher Watson" style={this.state.mobile ? styles.imageMobile : styles.image}/>
          <div className="button-div" style={styles.buttonDiv}>
            <div className="cta-text" style={this.state.mobile ? styles.textMobile : styles.text}>
              Let's create<br/> together<br/>
              <div className="tooltip">
                <a href="mailto:yowats0n@icloud.com?subject=I%20have%20a%20great%20idea!%20--chriswatson.co" style={styles.emailLink}><i className="fas fa-envelope-open-text"></i></a>
                <div style={{lineHeight: 'normal', textShadow: 'none', left: '-50px'}} className="tooltip-text">Contact Me!</div>
              </div>
            </div>
          </div>
        </div>
    );
  }
};

export default CTA;