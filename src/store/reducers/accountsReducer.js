const initState = {
  accounts: [
    {id: 1, name: 'Ahorros Bancolombia'},
    {id: 2, name: 'Ahorros Scotiaban'},
    {id: 3, name: 'Lifemiles'},
    {id: 4, name: 'Credicheque'}
  ]
};

const accountsReducer = (state = initState, action) => {
  return state;
}

export default accountsReducer;