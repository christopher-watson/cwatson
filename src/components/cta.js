import React from 'react';
import img from '../images/watsonLogo.png'

const styles = {
  cta: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr',
    alignItems: 'center',
    justifyItems: 'center',
    textAlign: 'center',
    background: '#00477790'
  },
  image: {
    gridArea: 'img',
    padding: '20%',
  },
  button: {
    border: '5px solid hsla(0, 0%, 0%, 0.8)',
    borderRadius: '15px',
    padding: '15px',
    boxShadow: '1px 1px 40px 20px hsla(0, 0%, 0%, 0.3)'
    // color: 'red',
  },
  buttonDiv: {
    gridArea: 'button',
  },
  text: {
    fontSize: '7vw',
    lineHeight: '7vw',
  },
  emailLink: {
    color: '',
    textDecoration: 'none',
    color: '#A30000'
  }
}

const CTA = () => {
  return (
      <div className='cta-div' style={styles.cta}>
        <img src={img} alt="Christopher Watson" style={styles.image}/>
        <div className="button-div" style={styles.buttonDiv}>
          <div className="cta-text" style={styles.text}>
            Let's create together<br/>
            <a href="mailto:yowats0n@icloud.com?subject=I%20have%20a%20great%20idea!%20--chriswatson.co" style={styles.emailLink}><i className="fas fa-envelope-open-text"></i></a>
          </div>
        </div>
      </div>
  );
};

export default CTA;