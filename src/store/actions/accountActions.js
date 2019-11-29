export const createAccount = (account) => {
  return (dispatch, getState) => {
    // Make async call to database
    dispatch({
      type: 'CREATE_ACCOUNT',
      account
    });
  }
};
