import React from 'react';

class Total extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: props.total
    }
  }

  render() {
    const { total, color } = this.props;
    return(
      <div className="total section">
        <h1 className={`total-${color}`}>{ total }</h1>
      </div>
    )
  }
}

export default Total

