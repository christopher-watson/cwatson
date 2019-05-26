import React from 'react';

const styles = {
  topRow: {
    borderTop: '2px solid #323232',
    borderRight: '2px solid #323232',
    borderLeft: '2px solid #323232',
    display: 'flex',
    background: '#323232',
    borderRadius: '10px 10px 0 0',
    padding: '5px'
  },
  redCircle: {
    color: '#FA2535cc',
    fontSize: '.5rem',
    marginLeft: '.5rem',
  },  
  blueCircle: {
    color: '#2C62C4cc',
    fontSize: '.5rem',
    marginLeft: '.3rem',
  },
  urlBar: {
    color: '#f7f7f7',
    marginLeft: '10px',
  },
  broswerWindow: {
    borderBottom: '2px solid #323232',
    borderRight: '2px solid #323232',
    borderLeft: '2px solid #323232',
    borderRadius: '0 0 10px 10px',
    height: '92%',
  },
  browserImg: {
    borderRadius: '0 0 8px 8px',
    objectFit: 'fill',
    display: 'block',
    height: '100%',
    width: '100%',
  },

}

const browser = (props) => {

  let url = `http://${props.url}`

  return (
    <div className='browser'>
      <a href={url} target='_blank' rel="noopener noreferrer" className='broswer-a' style={{textDecoration: 'none', background: '#323232'}}>
        <div className="top-row" style={styles.topRow}>
          <div className="red-circle" style={styles.redCircle}><i className="fas fa-circle"></i></div>
          <div className="blue-circle" style={styles.blueCircle}><i className="fas fa-circle"></i></div>
          <div className="url-bar" style={styles.urlBar}>{props.name}</div>
        </div>
        <div className="browser-window" style={styles.broswerWindow}>
          <img src={props.image} alt={props.name} style={styles.browserImg}/>
        </div>
      </a>
    </div>
  );
};

export default browser;