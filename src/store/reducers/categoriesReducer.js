const initState = {
  categories: [
    {id: 1, name: 'Viajes', color: 'orange'},
    {id: 2, name: 'Honorarios', color: 'green'},
    {id: 3, name: 'Alimentación', color: 'red'},
    {id: 4, name: 'Servicios', color: 'purple'},
    {id: 5, name: 'Préstamo', color: 'orange'},
    {id: 6, name: 'Transporte', color: 'pink'}
  ]
};

const categoriesReducer = (state = initState, action) => {
  return state;
}

export default categoriesReducer;