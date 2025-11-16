
//* problem 1

type FormatValueType = string | number | boolean


function formatValue(value: FormatValueType): FormatValueType {

    if (typeof value === "string") {
        return value.toUpperCase()

    } else if (typeof value === "number") {
        return value * 10

    } else {
        return !value;
    }



}



//* problem 2



function getLength(value: string | any[]): number {

    if (typeof value === "string") {

        return value.length;
    }



    return value.length;



}



//* problem 3
class Person {

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;

    }


    getDetails() :string{
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }


}

//*problem 4

type item = {
    title: string;
    rating: number;
}

function filterByRating(books: item[]): item[] {

    return books.filter(book => book.rating >= 4);

};



// const books: item[] = [
//     { title: 'Book A', rating: 4.5 },
//     { title: 'Book B', rating: 3.2 },
//     { title: 'Book C', rating: 5.0 },
// ];


//* problem 5

type UserOBj = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;

}


function filterActiveUsers(users: UserOBj[]): UserOBj[] {

    return users.filter(user => user.isActive === true)

}



// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));
// console.log(users);


//* problem 6

interface Book {

    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean
}


function printBookDetails(book: Book) {

    const Available = book.isAvailable ? "Yes" : "No"

    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${Available}`);


}


// const myBook: Book = {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     publishedYear: 1925,
//     isAvailable: true,
// };

//printBookDetails(myBook);

//* problem 7



function getUniqueValues<T extends number | string>(arr1: T[], arr2: T[]): T[] {

    const respons: T[] = [];

    const unick = (value: T) => {

        let exist = false;

        for (let i = 0; i < respons.length; i++) {

            if (respons[i] === value) {
                exist = true;
                break;
            }

        }

        if (!exist) {
            respons[respons.length] = value;
        }

    }

    for (let i = 0; i < arr1.length; i++) {
        unick(arr1[i]);
    }


    for (let i = 0; i < arr2.length; i++) {
        unick(arr2[i]);
    }

    return respons;



}


// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));

//*problem 8
type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}


function calculateTotalPrice(product: Product[]): number {

    if (product.length === 0) {
        return 0;
    }

    let totalPrice = 0;

    product.forEach(pro => {

        let total = pro.price * pro.quantity;

        if (pro.discount) {

            total = total * (1 - pro.discount / 100);

        }

        totalPrice = totalPrice + total;
    });


    return totalPrice;
}


// const products = [
//     { name: 'Pen', price: 10, quantity: 2 },
//     { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
//     { name: 'Bag', price: 50, quantity: 1, discount: 20 },
// ];

// console.log(calculateTotalPrice(products));