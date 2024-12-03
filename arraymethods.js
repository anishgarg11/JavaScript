// // pop() method -->  delete from end & return the value
// let fooditems = ["burger", "pizza", "noodles", "samosa"];
// let result = fooditems.pop();
// console.log(result)

// // push() method --> add the array at the end
// let items = ["banana", "apple", "grapes"];
// items.push("burger", "pizza");
// console.log(items);

// //toString() method --> array converts into String
// let array = ["anish", "ashish", "vaibhav"];
// array.toString();
// console.log(array);

// // concat() method --> add multiple arrays & return result
// let fruits = ["Banana", "apple", "grapes", "guava", "mango"];
// let veggies = ["Potato", "tomato", "cucumber", "carrot"];
// let hotel = ["anupama", "haldiram", "srs", "taj"];
// let result1 = fruits.concat(veggies, hotel);
// console.log(result1);

// // unshift() method --> add to start
// let dog = ["tommy", "timmy", "jhonny", "poppy"];
// dog.unshift("popu");
// console.log(dog);

// shift() method --> delete from start & return
// let heroes = ["Batman", "Indian Army", "Spiderman", "Shaktiman"];
// heroes.shift();
// console.log(heroes);

// // slice() method --> return a piece of the array
// let wood = ["saagwaan", "kikar", "marandi", "neem", "peepal", "saal", "aam"];
// console.log(wood.slice(0,7));

// // splice() method --> change the original array(add, remove, replace)
// let num = [1,2,101,102,5,6,7,8,9];
// num.splice(2,2,3,4);

// // Add element using splice() method
// num.splice(9,0,10,11,12);

// // Delete element using splice() method
// num.splice(10,2);

// // Replace element using splice() method
// num.splice(8,2, "x", "y");

// Question
// let company = ["Bloomerg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// company.splice(6,0,"Amazon");