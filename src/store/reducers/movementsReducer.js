const initState = {
  movements: [
    {
      id: 1,
      movement_type: 'ingreso',
      category: 'honorarios',
      account: 'Cuenta de ahorros Colpatria',
      amount: 3894150,
      date: '19/11/2019',
      description: 'Pago PanOpen'
    },
    {
      id: 2,
      movement_type: 'egreso',
      category: 'salud',
      account: 'Cuenta de ahorros Colpatria',
      amount: 635000,
      date: '20/11/2019',
      description: 'Coomeva, Préstamo, Prepagada'
    }
  ]
};

const movementsReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_MOVEMENT':
      console.log('create movement: ', action.movement);
  }
  return state;
}

export default movementsReducer;