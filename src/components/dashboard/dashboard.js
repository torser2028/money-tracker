import React, { Component } from 'react';
import MovementsContainer from '../movements/movementsContainer';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m12">
            <MovementsContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;