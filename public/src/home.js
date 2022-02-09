
function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
 return books.filter(book=>book.borrows[0].returned===false).length
}

function getMostCommonGenres(books) {
 const genres = books.reduce((acc,book)=>{
    book.genre in acc?acc[book.genre]++:acc[book.genre] = 1
    return acc
  },[])
  return Object.entries(genres)
  .map(type=>({name:type[0],count:type[1]}))
  .sort((genre1,genre2)=>genre1.count>genre2.count?-1:1).slice(0,5)
}

function getMostPopularBooks(books) {
    return books.reduce((popBookArray,book) => {
      popBookArray.push({
        'name':book.title,
        'count':book.borrows.length
      })
      return popBookArray;
    },[])
    .sort((book1,book2) => book2.count - book1.count).slice(0,5);   
}

function getMostPopularAuthors(books, authors) {
  let popularAuthors = [];
  books.forEach(book => {
    for(let authorIndex in authors){
      let author = authors[authorIndex];
      if(book.authorId === author.id){
        let {first,last} = author.name;
        popularAuthors.push({
          'name': `${first} ${last}`,
          'count': book.borrows.length
        });
      };
    }
  })
  return popularAuthors.sort((currentBook,nextBook) => nextBook.count - currentBook.count).slice(0,5); 
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
