// <!-- Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)


//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise




//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.


//   2. Perform the following operations:

//       i. Display info of all books
//       ii. Borrow 2 books and show their availability status
//       iii. Return 1 book and show updated status
//       iv. Count how many books are "long books" (more than 300 pages)
//       v. List all available books -->

class Book{
    title;
    author;
    pages;
    isAvailable=true;
    constructor(title,author,pages,isAvailable){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }
    borrow()
    {
        if(this.isAvailable)
        {
            this.isAvailable==false;
            return true;
        }
        else{
            return false;
        }
    }
    returnBook()
    {
        this.isAvailable=true;

    }
    getInfo()
    {
        console.log(`${this.title} by ${this.author} (${this.pages} pages)`);
    }
    isLongBook(pages)
    {
        return this.pages>300;
  
    }
}
let b1=new Book("Wings of fire","APJ Abdul Kalam",300,true)
let b2=new Book("harry potter","Hobbit",200,true)
let b3=new Book("Incredible","Epson",400,false)
let b4=new Book("Stranger Things","Robert Hook",350,true)
let b5=new Book("Good Bye","Wiiliam",100,false)
const library=[b1,b2,b3,b4,b5];
console.log("All books:");
library.forEach(book =>book.getInfo());
b1.borrow();
b4.borrow()
console.log("After buying 2 books:");
library.forEach(book => {
  console.log(`${book.title} - Available: ${book.isAvailable}`);
});
b1.returnBook();

console.log("\nAfter returning 1 book:");
library.forEach(book => {
  console.log(`${book.title}-Available: ${book.isAvailable}`);
});
const longBooksCount = library.filter(book => book.isLongBook()).length;
console.log("Number of long books:", longBooksCount);
const availableBooks = library.filter(book=>book.isAvailable);
console.log("Available Books:");
availableBooks.forEach(book=>book.getInfo());