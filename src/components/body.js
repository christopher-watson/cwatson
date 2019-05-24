// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Social from './social';
import CTA from './cta';

class body extends Component {
  // state = {

  // }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress = (e) => {
    console.log(e.key)
  }

  render() {
    return (
        <div className='inner-body'>
          <div className="work">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ducimus recusandae odit eligendi hic quasi harum. Aliquid architecto excepturi illum rem ut fuga sint est? Placeat fuga nulla quasi provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, accusamus repellendus illo sunt quidem laboriosam? Ex, vero libero et nam, architecto expedita perspiciatis similique voluptatibus, eveniet veritatis fugit ab. Voluptatibus.
            Sit ratione autem praesentium vero deserunt similique repellat maiores temporibus quam delectus laborum, at alias repellendus quisquam numquam pariatur minima ut enim ullam a atque earum dolorem nobis! Modi, ipsa.
            In, hic placeat ut delectus optio quod voluptatibus, rerum adipisci earum necessitatibus corporis illum alias inventore veritatis, reprehenderit quam incidunt labore ratione magni ad non sunt nemo tenetur laboriosam? Ullam!
            Natus reprehenderit facilis perspiciatis debitis magnam est itaque, nesciunt unde soluta amet corporis in at, tempore architecto molestiae! Sunt laudantium aspernatur voluptate esse, modi voluptatem aperiam labore tempora quis officiis.
          </div>
          <div className="testimonials">
            Egestas sodales urna enim proin penatibus aliquam porta pulvinar risus nulla senectus, at vivamus litora platea rutrum hac conubia arcu suspendisse pellentesque, dolor praesent mattis aptent justo inceptos sagittis cursus integer rhoncus. Arcu montes ultricies nibh quis mi faucibus fermentum dis consectetur leo dictum vivamus magnis fringilla, aptent mollis litora rhoncus curae sagittis eget lectus enim sapien hac parturient. Vitae condimentum et consectetur habitant lacus penatibus netus phasellus, malesuada dui lorem at faucibus conubia augue, semper senectus sollicitudin ultricies molestie natoque est. Quis facilisi primis praesent dictumst semper penatibus commodo vehicula scelerisque dis elit, curabitur habitant adipiscing diam dictum sit eget potenti convallis. Egestas luctus suspendisse habitant vestibulum dolor velit torquent netus sociosqu, facilisi ut etiam pulvinar penatibus tempus bibendum dui odio molestie, curae pretium est conubia cum platea ultricies quam. Class venenatis ipsum feugiat enim conubia lacus ante elementum himenaeos ut, vehicula interdum libero aenean consequat cubilia ultrices cursus mus, suscipit netus habitant dictum lorem integer et parturient laoreet. Nullam conubia imperdiet ad ut scelerisque dis eget, ultricies risus lorem arcu magna fames consequat per, ipsum sapien potenti hac condimentum est.

            Quis conubia cras consequat rhoncus vitae sagittis amet vel praesent mauris cubilia dictum platea, habitant cum torquent nullam sodales posuere dui venenatis pellentesque eros lacus primis. Facilisi et dictum fusce platea congue litora nec ut fermentum, fringilla ante ultricies gravida nam massa fames vitae, proin neque enim vel tristique interdum ultrices nisi. Porta aenean consectetur bibendum elementum habitasse cursus dui fusce at sed, himenaeos convallis mi vehicula ipsum a odio eleifend posuere, vivamus adipiscing eget morbi ultricies egestas placerat volutpat malesuada. Sem hac ante aliquet nunc habitant lorem porttitor, netus ad penatibus quam sodales lobortis litora, pharetra ullamcorper nisi dapibus nibh suscipit.
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