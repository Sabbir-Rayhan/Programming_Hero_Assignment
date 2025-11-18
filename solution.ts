// Problem 1
type ValueType = string | number | boolean

const formatValue = (value : ValueType): ValueType =>{
    if(typeof value === 'string'){
        return value.toUpperCase()
    }else if(typeof value === 'number'){
        return value*10
    }else{
        return !value
    }
}


// Problem 2

type ValueType1 = string | Array<unknown>

const getLength = (value : ValueType1) : number =>{
    if(typeof value === 'string'){
        return value.length
    }else if(Array.isArray(value)){
        return value.length
    }

    return 0;
}


// Problem 3

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}


// Problem 4

interface ItemType{
    title : string
    rating : number
}

const filterByRating = (items : ItemType[] ) : ItemType[]=>{
    return items.filter(item => item.rating >= 4)
}



//Problem 5

interface UserType{
    id : number
    name : string
    email : string
    isActive : boolean
}

const filterActiveUsers = (users : UserType[]) : UserType[]=>{
    return users.filter(user => user.isActive)
}



// Problem 6

interface Book{
    title : string
    author : string
    publishedYear : number
    isAvailable : boolean
}

const printBookDetails = (book : Book)=>{
    const YesNo = book.isAvailable ? "Yes" : "No"

    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${YesNo}`);
}



// Problem 7

type ara = string | number

const getUniqueValues = (array1 : ara[], array2 : ara[] ) : ara[] =>{
    const newArray : ara[] = []
    
    for(let i=0; i<array1.length; i++){
        let flag = 0;
        for(let j=0; j<newArray.length; j++){
            if(array1[i] === newArray[j]){
                flag++;
                break;
            }
        }
        if(flag == 0){
            newArray.push(array1[i]!)
        }
    }
    
    for(let i=0; i<array2.length; i++){
        let flag = 0;
        for(let j=0; j<newArray.length; j++){
            if(array2[i] === newArray[j]){
                flag++;
                break;
            }
        }
        if(flag == 0){
            newArray.push(array2[i]!)
        }
    }

    return newArray;
}


// Problem 8

interface ProductType{
    name : string
    price : number
    quantity : number
    discount? : number
}

const calculateTotalPrice = (products: ProductType[]): number => {
  return products.reduce((total, product) => {

    const price = product.price * product.quantity;

    const totalPrice = product.discount
      ? price * (1 - product.discount / 100)
      : price;

    return total + totalPrice;

  }, 0);
};


