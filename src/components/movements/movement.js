import React from 'react';

class Movement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movement: props.movement
    }
  }

  render() {
    const { movement } = this.state;
    const { key } = movement.id;
    return(
      <div className={`movement-container col s12 m12 ${movement.description}`} key={ key }>
        <div className="col s4 m4">{ movement.description }</div>
        <div className="col s1 m1">{ movement.amount }</div>
        <div className="col s2 m2">{ movement.date }</div>
        <div className="col s4 m4">{ movement.source }</div>
        <div className="col s1 m1">{ movement.category }</div>
      </div>
    )
  }
}

export default Movement

