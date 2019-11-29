import React, { Component } from 'react';
import MovementsContainer from '../movements/movementsContainer';
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { movements } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m12">
            <MovementsContainer movements={movements} />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    movements: state.movements.movements
  }
}
export default connect(mapStateToProps)(Dashboard);