import React from 'react';

const Total = (props) => {
  const { color, signedTotal } = props;
  return(
    <div className="total section col s12 m12">
      <h1 className={`${color}-text center-align`}>{ signedTotal }</h1>
    </div>
  )
}

export default Total

