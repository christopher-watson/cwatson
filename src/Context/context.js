import React, { Component } from 'react';

export const MyContext = React.createContext();
export class MyProvider extends Component {
  // state = {

  // }

  handleMouseEnter = () => {
    console.log('entered')
  }

  handleMouseLeave = () => {
    console.log('exited')
  }

  render() {
    return (
      <MyContext.Provider value={{
        //state
        // state: this.state,

        //functions
        handleMouseEnter: this.handleMouseEnter,
        handleMouseLeave: this.handleMouseLeave,
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
