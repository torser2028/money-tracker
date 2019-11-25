import React from 'react';

class Movement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movement: props.movement
    }
  }

  getRowColor(type){
    return type === 'ingreso' ? 'green' : 'red';
  }

  render() {
    const { movement } = this.state;
    const { key } = movement.id;
    const color = this.getRowColor(movement.movement_type);
    return(
      <div className={`movement-container collection-item col s12 m12`} key={ key }>
        <span className="col s4 m4 l4 truncate">{ movement.description }</span>
        <span className={`col s2 m2 l1 ${color}-text`}>{ movement.amount }</span>
        <span className="col s3 m2 l2">{ movement.date }</span>
        <span className="col s3 m4 l3 truncate">{ movement.source }</span>
        <span className="col l2 hide-on-med-and-down truncate">{ movement.category }</span>
      </div>
    )
  }
}

export default Movement

