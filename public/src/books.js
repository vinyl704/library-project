function findAuthorById(authors, id) {
  return authors.find(author=>author.id === id)
}

function findBookById(books, id) {
 return books.find(book=>book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
 
  //original solution
 /*
 const returnedArray = books.filter(book=>book.borrows[0].returned===true),
 const notReturned = books.filter(book=>book.borrows[0].returned===false);
 return [notReturned,returnedArray]
 */
//Self Indulgent solution
return [notReturned = books.filter(book=>!book.borrows[0].returned),books.filter(book=>book.borrows[0].returned)];

}

function getBorrowersForBook(book, accounts) {
const borrowers = [];
  accounts.forEach(account => {
    book.borrows.filter(borrowed => {
      if (account.id === borrowed.id){
      account['returned']= borrowed.returned;
      borrowers.push(account);
    };
    })
  });
  return borrowers.slice(0, 10);

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
