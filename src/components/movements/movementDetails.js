import React from 'react';

const MovementDetails = (props) => {
  const id = props.match.params.id;
  return(
    <div className="container">
      <div className="row">
        <div className="col s12 m12">
          <span className="col s4 m4 l4 truncate">Description + {id}</span>
          <span className="col s2 m2 l1">500000</span>
          <span className="col s3 m2 l2">01/01/2019</span>
          <span className="col s3 m4 l3 truncate">Cuenta de ahorros</span>
          <span className="col l2 hide-on-med-and-down truncate">Salud</span>
        </div>
      </div>
    </div>
  )
}

export default MovementDetails