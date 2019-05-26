// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Social from './social';
import CTA from './cta';
import Browser from './browser';
import Skills from './skills';
import Testimonial from './testimonial';

// images
import lindsay from '../images/lindsay.jpg';
import vinyl from '../images/vinyl.jpg';
import jeopardy from '../images/jeopardy.jpg';
import gif from '../images/gif.jpg';
// import carousel from '../images/carousel.jpg';

class body extends Component {
  state = { 
    mobile: false,
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
    window.addEventListener('keydown', this.handleKeyPress)
  }

  handleResize = () => {
    console.log('resizing')
    if(window.innerWidth < 960) {
      this.setState({ mobile: true })
    }
    else {
      this.setState ({ mobile: false })
    }
  }

  handleKeyPress = (e) => {
    console.log(e.key)
  }

  render() {
    return (
        <div className='inner-body'>
          <div className="work">
            <Browser name='lindsaywatson.co' url='lindsaywatson.co' image={lindsay}/>
            <Browser name='Vinyl Game' url='christopherwatson.co/vinyl' image={vinyl}/>
            <Browser name='Trivia Game' url='christopherwatson.co/trivia' image={jeopardy}/>
            <Browser name='GIF Generator' url='christopherwatson.co/gif-bot' image={gif}/>
            {/* <Browser name='Image Carousel' url='christopherwatson.co/gif-bot' image={carousel}/> */}
          </div>
          <div className="skills">
            <Skills/>
          </div>
          <div className="testimonials">
            <Testimonial/>
          </div>
          <div className="social">
            <div className="links">
              <Social/>
            </div>
            <div className="cta">
              <CTA/>
            </div>
          </div>
        </div>
    );
  }
}

// body.propTypes = {

// };

export default body;