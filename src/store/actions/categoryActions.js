export const createCategory = (category) => {
  return (dispatch, getState) => {
    // Make async call to database
    dispatch({
      type: 'CREATE_CATEGORY',
      category
    });
  }
};
