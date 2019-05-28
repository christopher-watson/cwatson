import React, { Component } from 'react';

const styles = {
  skillsHidden: {
    visibility: 'none',
    opacity: 0,
  },
  skillsVis: {
    opacity: 1,
    transition: 'opacity 2s',
    marginBottom: '20px',
  },
  skillsIcons: {
    fontSize: '5rem',
    margin: '0 20px'
  },
  // skillsCollapseInnerMobile: {
  //   overflow: 'scroll',
  // },
  // skillsCollapseInner: {
  //   overflow: 'auto',
  // },
  skillsCollapseMain: {
    textAlign: 'center',
    backgroundColor: '#5D5D5D30',
    display: 'grid',
    height: '55px',
    transition: 'height 250ms'
  },
  thisClosed: {
    margin: '.5rem 0',
    fontSize: '2rem',
    transition: 'transform 2s',
    transform: 'rotate(-360deg)',
    textShadow: '0 0 1px #323232'
  },
  thisOpen: {
    color: '#FA2535',
    margin: '.5rem 0',
    fontSize: '2rem',
    transition: 'transform 2s',
    transform: 'rotate(541deg)',
    textShadow: '0 0 1px #323232'
  },
}

class Skills extends Component {
  state = { 
    thisCollapse: false,
    mobile: false,
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  toggle() {
    this.setState({ thisCollapse: !this.state.thisCollapse });
    if(this.state.thisCollapse){
      document.getElementById('collapseSkills').style.height = '55px'
    }
    else{
      document.getElementById('collapseSkills').style.height = '350px'
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
      <div className="skills-collapse" id='collapseSkills' style={styles.skillsCollapseMain}>
        <span className="skills-collapse-span">
          <div className="tooltip">
            <i onClick={() => this.toggle()} className="fas fa-wrench" style={this.state.thisCollapse ? styles.thisOpen : styles.thisClosed}></i>
            <div className="tooltip-text">My Skills</div>
          </div>
        </span>
        <div className="skills-collapse-inner" style={this.state.mobile ? styles.skillsCollapseInnerMobile : styles.skillsCollapseInner}>
          <div className='skills-icons' style={this.state.thisCollapse ? styles.skillsVis : styles.skillsHidden}>
            <i style={styles.skillsIcons} className="fab fa-java"></i>
            <i style={styles.skillsIcons} className="fab fa-python"></i>
            <i style={styles.skillsIcons} className="fab fa-html5"></i>
            <i style={styles.skillsIcons} className="fab fa-css3-alt"></i>
            <i style={styles.skillsIcons} className="fab fa-js-square"></i>
            <i style={styles.skillsIcons} className="fab fa-react"></i>
            <i style={styles.skillsIcons} className="fab fa-aws"></i>
            <i style={styles.skillsIcons} className="fab fa-node"></i>
            <br/>and more!
          </div>
        </div>
      </div>
    )
  }

}
export default Skills;
