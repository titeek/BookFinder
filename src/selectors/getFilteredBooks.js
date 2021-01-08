export const getFilteredBooks = (books, hasCover) => {

  return books.filter(book => {
    if(!hasCover) return true; //pokazuj wszystkie
    
    return !!book.cover_i;
  });
}