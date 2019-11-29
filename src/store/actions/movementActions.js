export const createMovement = (movement) => {
  return (dispatch, getState) => {
    // Make async call to database
    dispatch({
      type: 'CREATE_MOVEMENT',
      movement
    });
  }
};
