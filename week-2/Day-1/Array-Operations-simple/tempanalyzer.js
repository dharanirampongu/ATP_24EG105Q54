// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

const temperatures = [32, 35, 28, 40, 38, 30, 42];
let res=temperatures.filter((temp)=>temp>=35)
console.log(res)
let res1=temperatures.map((temp)=>temp*9/5+32)
console.log(res1)
let res2=temperatures.reduce((sum,temp)=>temp+sum,0)/temperatures.length
console.log(res2)
let res3=temperatures.find(temp=>temp>40)
console.log(res3)
let res4=temperatures.findIndex(temp=>temp==28)
console.log(res4)