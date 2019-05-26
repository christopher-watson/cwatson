import PropTypes from "prop-types";
import React, { Component, Fragment } from 'react';

const styles = {
  textHidden: {
    // display: 'none',
    visibility: 'none',
    opacity: 0,
  },
  textVis: {
    opacity: 1,
    transition: 'opacity 2s',
  },
  headerBottomMobile: {
    overflow: 'scroll'
  },
  headerBottom: {
    overflow: 'auto'
  },
  plusClosed: {
    transition: 'transform 2s',
    transform: 'rotate(-315deg)',
  },
  plusOpen: {
    transition: 'transform 2s',
    transform: 'rotate(360deg)',
    color: '#FA2535'
  },
}

class Header extends Component {
  state = { 
    collapse: false,
    mobile: false,
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
    // window.addEventListener('keydown', this.handleKeyPress)
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
    if(this.state.collapse){
      document.getElementById('collapseHeader').style.height = '55px'
    }
    else{
      document.getElementById('collapseHeader').style.height = '250px'
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

  render () {
    return (
      <header>
        <div className="header-top">
          <div className="header-text header-left">
            Software Engineer
          </div>
          <div className="header-text header-title">
            {
              this.state.mobile ?
              <Fragment>C w</Fragment>
              :
              <Fragment>ChrIstophEr watSon</Fragment>
            }
          </div>
          <div className="header-text header-right">
            Full Stack Developer
          </div>
        </div>
        <div className="header-bottom" id='collapseHeader'>
          <span className="header-bottom-span">
            <div className="tooltip">
              <i onClick={() => this.toggle()} className="far fa-times-circle" style={this.state.collapse ? styles.plusOpen : styles.plusClosed}></i>
              <div className="tooltip-text">About Me</div>
            </div>
          </span>
          <div className="header-bio" style={this.state.mobile ? styles.headerBottomMobile : styles.headerBottom}>
            <p className='header-bio-text' style={this.state.collapse ? styles.textVis : styles.textHidden}>
            As an educator with nearly a decade of experience, I have been through almost everything. I've always said If you can teach high school, you can do <b> anything</b>. So what do I choose to do? More school, of course. After having a knack for computers at a very young age, naturally the desire to become a engineer and developer has turned from a hobby, to a passion, into a career. With a masters in software engineering and experience as a full stack developer I assure you I can bring my skills to any project that comes to mind. Reach out and lets create together. 
            </p>
          </div>
        </div>
      </header>
    )
  }

}
export default Header;

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}