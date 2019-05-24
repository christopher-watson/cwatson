// import PropTypes from "prop-types";
import React, { Component } from 'react';
import Card from './card';


const styles = {
  socialHidden: {
    // display: 'none',
    visibility: 'none',
    opacity: 0,
  },
  socialVis: {
    opacity: 1,
    transition: 'opacity 2s',
    marginBottom: '20px'
  },
  socialCollapseInnerMobile: {
    overflow: 'scroll',
    // paddingBottom: '13px',
  },
  socialCollapseInner: {
    overflow: 'auto',
    // paddingBottom: '13px',
  },
  socialCollapseMain: {
    textAlign: 'center',
    backgroundColor: '#5D5D5D30',
    display: 'grid',
    height: '36px',
    transition: 'height 250ms'
  },
  atClosed: {
    margin: '.5rem 0',
    fontSize: '1rem',
    transition: 'transform 2s',
    transform: 'rotate(-360deg)',
  },
  atOpen: {
    color: '#FF002890',
    margin: '.5rem 0',
    fontSize: '1rem',
    transition: 'transform 2s',
    transform: 'rotate(540deg)',
  },
}

class Social extends Component {
  state = { 
    atCollapse: false,
    mobile: false,
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
    this.getColors()
  }

  toggle() {
    this.setState({ atCollapse: !this.state.atCollapse });
    if(this.state.atCollapse){
      document.getElementById('collapseSocial').style.height = '36px'
    }
    else{
      document.getElementById('collapseSocial').style.height = '190px'
    }
  }

  handleResize = () => {
    if(window.innerWidth < 960) {
      this.setState({ mobile: true })
    }
    else {
      this.setState ({ mobile: false })
    }
  }

  getColors = () => {
    setTimeout(() => {
      document.getElementById('twitter').style.backgroundColor = '#0693E3'
      document.getElementById('facebook').style.backgroundColor = '#3A5A98'
      document.getElementById('github').style.backgroundColor = '#23282D'
      document.getElementById('linkedin').style.backgroundColor = '#0077B5'
      document.getElementById('instagram').style.background = 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
      document.getElementById('medium').style.backgroundColor = '#23282D'
    }, 200);
  }

  render () {
    return (
      <div className="social-collapse" id='collapseSocial' style={styles.socialCollapseMain}>
        <span className="social-collapse-span">
          <i onClick={() => this.toggle()} className="fas fa-at" style={this.state.atCollapse ? styles.atOpen : styles.atClosed}></i>
        </span>
        <div className="social-collapse-inner" style={this.state.mobile ? styles.socialCollapseInnerMobile : styles.socialCollapseInner}>
          <div className='social-icons' style={this.state.atCollapse ? styles.socialVis : styles.socialHidden}>
            <Card image='fab fa-twitter' name='twitter' handle='@yowats0n' link='https://www.twitter.com/yowats0n' />
            <Card image='fab fa-facebook-square' name='facebook' handle='Christopher Watson' link='https://www.facebook.com/yowats0n'/>
            <Card image='fab fa-github' name='github' handle='christopher-watson' link='https://www.github.com/christopher-watson'/>
            <Card image='fab fa-linkedin' name='linkedin' handle='Christohper Watson' link='https://www.linkedin.com/in/christopher-watson-30/'/>
            <Card image='fab fa-instagram' name='instagram' handle='@yowats0n' link='https://www.instagram.com/yowats0n'/>
            <Card image='fab fa-medium' name='medium' handle='@yowats0n' link='https://www.medium.com/@yowats0n'/>
          </div>
        </div>
      </div>
    )
  }

}
export default Social;

// Social.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Social.defaultProps = {
//   siteTitle: ``,
// }