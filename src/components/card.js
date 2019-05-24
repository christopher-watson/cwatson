import React from 'react';
// import MyContext from '../Context/context';

const styles = {
  card: {
    display: 'grid',
    gridTemplateColumns: '5rem 10rem',
    gridTemplateAreas: 'img handle',
    width: 'min-content',
    border: '5px solid hsla(0, 0%, 0%, 0.8)',
    borderRadius: '15px',
    margin: '5px 0'
  },
  image: {
    display: 'flex',
    borderRight: '1.5px dashed black',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    borderRadius: '8px 0 0 8px',
    fontSize: '3rem',
    padding: '1rem 0',
  },
  handle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: '0 8px 8px 0',
  }
}



const card = (props) => {
  return (
    // <MyContext.Consumer>
    //   {({ handleMouseEnter, handleMouseLeave }) => (
      // <div className='card' style={styles.card} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className='card' style={styles.card}>
        <div style={styles.image} id={props.name}><i className={props.image}></i></div>
        <div className={'card-text'}style={styles.handle}><a style={{textDecoration: 'none', color: 'hsla(0, 0%, 0%, 0.8)'}} href={props.link} target='_blank' rel="noopener noreferrer">{props.handle}</a></div>
      </div>
    // )}
    // </MyContext.Consumer>
  );
};

export default card;