import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '40px 30px',
    width: '100vw',
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
    width: '100%',
  },
  author: {
    color: '#FA2535dd',
    fontStyle: 'italic',
  },
  hr: {
    borderTop: '1px dashed #f7f7f7',
    width: '80%',
    margin: '20px 0',
  },
}

const Testimonial = () => {
  return (
    <div style={styles.container} className='testimonial-inner'>
      <div style={styles.heading} className="testimonial-heading">Testimonials:</div>
      {/* test 1 */}
      <div style={styles.text} className="testimonial-text">
        Sociosqu accumsan nec varius lectus cum sociis rutrum tincidunt facilisi magna eleifend congue parturient ac ante nam posuere orci aptent
        <span style={styles.author}className="testimonial-author"> - Mike Jones</span>
      </div>
      <hr style={styles.hr}/>

      {/* test 2 */}
      <div style={styles.text} className="testimonial-text">
        Sociosqu accumsan nec varius lectus cum sociis rutrum tincidunt facilisi magna eleifend congue parturient ac ante nam posuere orci aptent
        <span style={styles.author}className="testimonial-author"> - Mike Jones</span>
      </div>
      <hr style={styles.hr}/>

      {/* test 3 */}
      <div style={styles.text} className="testimonial-text">
        Sociosqu accumsan nec varius lectus cum sociis rutrum tincidunt facilisi magna eleifend congue parturient ac ante nam posuere orci aptent
        <span style={styles.author}className="testimonial-author"> - Mike Jones</span>
      </div>
    </div>
  );
};

export default Testimonial;