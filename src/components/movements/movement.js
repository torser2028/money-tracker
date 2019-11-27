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

  getSigendAmount(type, amount){
    return type === 'ingreso' ? `+ $${amount}` : `- $${amount}`;
  }

  render() {
    const { movement } = this.state;
    const { key } = movement.id;
    const color = this.getRowColor(movement.movement_type);
    const signedAmount = this.getSigendAmount(movement.movement_type, movement.amount);
    return(
      <tr key={key}>
        <td><span>{ movement.description }</span></td>
        <td><span className={`${color}-text right-align`}>{ signedAmount }</span></td>
        <td><span>{ movement.date }</span></td>
        <td className="hide-on-small-only"><span>{ movement.source }</span></td>
        <td className="hide-on-med-and-down"><span>{ movement.category }</span></td>
      </tr>
    )
  }
}

export default Movement

