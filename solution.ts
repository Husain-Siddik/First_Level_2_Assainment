


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







function getLength(value: string | any[]): number {

    if (typeof value === "string") {

        return value.length;
    }



    return value.length;



}




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



type item = {
    title: string;
    rating: number;
}

function filterByRating(books: item[]): item[] {

    return books.filter(book => book.rating >= 4);

};








type UserOBj = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;

}


function filterActiveUsers(users: UserOBj[]): UserOBj[] {

    return users.filter(user => user.isActive === true)

}








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


