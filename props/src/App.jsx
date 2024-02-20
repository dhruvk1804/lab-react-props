import './App.css';
import React from 'react';

function App(props) {
  // code here
  const imgData = props.data

  return (
    <div>
      <h1>Kalvium Gallary</h1>
      <div className="row">

      {
        imgData.map((image) => {
          return (
            <div className="column"key={image.id}>
        <img src={image.img} alt="" />
      </div>

          )
        })
      }  
      
    </div>
    </div>
  );
}

export default App;