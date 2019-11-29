const initState = {
  accounts: [
    {id: 1, name: 'Ahorros Bancolombia'},
    {id: 2, name: 'Ahorros Scotiaban'},
    {id: 3, name: 'Lifemiles'},
    {id: 4, name: 'Credicheque'}
  ]
};

const accountsReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_ACCOUNT':
      console.log('create account: ', action.account);
  }
  return state;
}

export default accountsReducer;