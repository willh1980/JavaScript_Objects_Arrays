console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

let sum = 0;

 function arraySum (numbers) {
    
     numbers.forEach(number => {sum += number})

     return sum
 };

arraySum(numbers)

console.log(sum)



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {};

book.title = "The Best Book Ever";

book.pages = 199;

book.readCount = 3;

book.info = function(randomBook) {
 
    return `The book title is "${randomBook.title}" and it has ${randomBook.pages} pages. I've read this book ${randomBook.readCount} times.`

}



console.log(book.info(book))






