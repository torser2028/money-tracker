import React from 'react';

const Total = (props) => {
  const { total, color } = props;
  return(
    <div className="total section col s12 m12">
      <h1 className={`${color}-text`}>{ total }</h1>
    </div>
  )
}

export default Total

