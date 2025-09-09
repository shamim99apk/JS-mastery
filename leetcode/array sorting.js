//array can be sorted according to alphabitacal way but sorting doesnot return new array it modify the parent array.
let names = ["payel","shafin","annona","lamina"];
console.log(names.sort());

//for sorting of number we need to declare a function inside sort
let number = [1,5,8,2,19,10,30,25];
number.sort((a,b)=>{
    return a-b;
})
//sorting of number in descending order
let number2 = [1,5,8,2,19,10,30,25];
let result = number2.toSorted((a,b)=>{
    return b-a;
})
//sorting of number in random way
number2.sort((q,b)=>{
    return 0.5 - Math.random();
})
console.log(number2);
//return the highest number in an array donot use sorting array because it consume more memory
let points = [1,5,8,2,19,10,30,25];

console.log(MyArrayMax(points))

function MyArrayMax(arr){
    return Math.max.apply(null,arr)

}

//sorting of object array
let cars = [{
    name:"volvo",
    year : 2015
},
{
    name : "corolla",
    year : 2020
},
{
name : "axio",
year : 2018
}]
cars.sort((a,b)=>{
    return a.year - b.year
})
console.log(cars)