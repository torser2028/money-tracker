import React, { Component } from 'react';
import Movement from './movement';

class MovementsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      movements: [
        {
          id: 1,
          movement_type: 'ingreso',
          category: 'honorarios',
          source: 'Cuenta de ahorros Colpatria',
          amount: 3894150,
          date: '19/11/2019',
          description: 'Pago PanOpen'
        },
        {
          id: 2,
          movement_type: 'egreso',
          category: 'salud',
          source: 'Cuenta de ahorros Colpatria',
          amount: 635000,
          date: '20/11/2019',
          description: 'Coomeva, Préstamo, Prepagada'
        }
      ]
    }
  }

  // componentDidMount() {
  //   this.RetrieveMovements();
  // }

  // RetrieveMovements() {
  //   const categoryId = this.props.categoryId;
  //   fetch(`${API_ROOT}/categories/${categoryId}/products.json`)
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       this.setState({products: result});
  //     },
  //     (error) => {
  //       this.setState({products: []});
  //     }
  //   )
  // }

  render() {
    const { movements } = this.state;
    const listMovements = movements.map((movement) =>
      <Movement movement={movement} key={movement.id} />
    );
    return (
      <div className="movements-list section">
        { listMovements }
      </div>
    )
  }
}

export default MovementsContainer;
