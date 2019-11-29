const initState = {
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
};

const movementsReducer = (state = initState, action) => {
  return state;
}

export default movementsReducer;