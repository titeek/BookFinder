export const booksFilters = (state = false, action) => {
  switch (action.type) {
    case 'SEARCH_BOOKS_WITH_COVERS':
      return action.value;
        
    default: 
      return state;
  }
}
