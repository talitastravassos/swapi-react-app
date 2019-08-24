import React from 'react'
import loader from '../images/loading2.gif'

const Loader = props => {
  return (
    <div className="App-div">
        <img 
        style={{width: 250}}
        alt='Loader icon'
        src={loader}
        />
      
    </div>
  );
}

export default Loader;
