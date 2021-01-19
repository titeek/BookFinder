export const numberOfResults = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_NUMBER_SUCCESS':
      return action.numberOfResults;
        
    default: 
      return state;
  }
}
