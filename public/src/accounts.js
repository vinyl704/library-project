//helper function could be one that gets a list of the books that the account has rented
//specific to task
function _accountBorrows(account,books){
  return books.filter(function(book){
    for(let copy of book.borrows){
      if(copy.id === account.id){
        return book
      }
    }
  })
}

function findAccountById(accounts, id) {
  for(let account of accounts){
  if(account.id === id){
    return account
  }
 }
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((account,next)=>account.name.last.toLowerCase()<next.name.last.toLowerCase()?-1:1)
}

function getTotalNumberOfBorrows(account, books) {
   return _accountBorrows(account,books).length;
}

function getBooksPossessedByAccount(account, books, authors) {

  return _accountBorrows(account,books).reduce((list,book)=>{
    let author = authors.find(author=>author.id===book.authorId);
   book.borrows.filter(borrows=>{
     if(borrows.id===account.id && borrows.returned === false){
      book.author=author;
      list.push(book)
      };
  })
  return list
},[])

}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
