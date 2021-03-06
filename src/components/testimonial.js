import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 90px',
    // width: '100vw',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  heading: {
    marginBottom: '30px',
    color: '#1CBCAC',
    fontSize: '2rem',
  },
  text: {
    color: '#DADADA',
    // width: '100%',
  },
  author: {
    color: '#FA2535dd',
    fontStyle: 'italic',
  },
  hr: {
    borderTop: '1px dashed #f7f7f7',
    width: '70%',
    margin: '20px 0',
  },
  links: {
    color: '#dadada'
  },
}

const Testimonial = () => {
  return (
    <div style={styles.container} className='testimonial-inner'>
      <div style={styles.heading} className="testimonial-heading">Testimonials:</div>
      {/* test 1 */}
      <div style={styles.text} className="testimonial-text">
        Christopher has curated the perfect website for me. It’s captivating, to the point, and relays exactly the message I was looking to communicate to my audience. 
        I would definitely look to him to create another in the future. <br/>
        <span style={styles.author}className="testimonial-author"> - Lindsay Watson | <a style={styles.links} target='_blank' rel="noopener noreferrer" href="https://lindsaywatson.co">lindsaywatson.co</a></span>
      </div>


      <hr style={styles.hr}/>

      {/* test 2 */}
      <div style={styles.text} className="testimonial-text">
      Chris made me a website that I have been wanting for years. Simplicity at its best. It is super functional, easy to use, mobile friendly, and modern. Chris was very attentive to my wants and needs. He was also able to implement his own style into the website when I was unsure about something. Chris was very easy to work with and was always responsive to my messages.  <br/>
        <span style={styles.author}className="testimonial-author"> - Ben Isabella | <a style={styles.links} target='_blank' rel="noopener noreferrer" href="https://isabellafitness.com">isabellafitness.com</a></span>
      </div>


      {/* <hr style={styles.hr}/> */}


      {/* test 3 */}
      {/* <div style={styles.text} className="testimonial-text">
        Sociosqu accumsan nec varius lectus cum sociis rutrum tincidunt facilisi magna eleifend congue parturient ac ante nam posuere orci aptent <br/>
        <span style={styles.author}className="testimonial-author"> - Mike Jones</span>
      </div> */}
    </div>
  );
};

export default Testimonial;