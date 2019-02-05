import React from 'react'
import loader from '../images/loading.gif'

const Loader = props => {
  return (
    <div className="App-div">
        <img 
        alt='Loader icon'
        src={loader}
        />
      
    </div>
  );
}

export default Loader;
