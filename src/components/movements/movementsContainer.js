import React, { Component } from 'react';
import Total from './total';
import Movement from './movement';

class MovementsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      color: 'green',
      signedTotal: '+ $0',
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

  componentDidMount() {
    this.getTotalAndColor(this.state.movements);
  }

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

  getTotalAndColor(movements) {
    let total = 0;
    movements.forEach((movement) => {
      if(movement.movement_type === 'ingreso') {
        total = total + movement.amount;
      } else{
        total = total - movement.amount;
      }
    });
    const color = total >= 0 ? 'green' : 'red';
    const signedTotal = total >= 0 ? `+ $${total}` : `- $${total}`;
    this.setState({
      total: total,
      color: color,
      signedTotal: signedTotal
    })
  }

  render() {
    const { movements, total, color, signedTotal } = this.state;
    const listMovements = movements.map((movement) =>
      <Movement movement={movement} key={movement.id} />
    );
    return (
      <div>
        <Total total={total} color={color} signedTotal={signedTotal} />
        <table class="highlight">
          <thead>
            <tr>
              <th>Item</th>
              <th>Valor</th>
              <th>Fecha</th>
              <th className="hide-on-small-only">Descripción</th>
              <th className="hide-on-med-and-down">Categoría</th>
            </tr>
          </thead>
            <tbody>
              { listMovements }
            </tbody>
        </table>
      </div>
    )
  }
}

export default MovementsContainer;
