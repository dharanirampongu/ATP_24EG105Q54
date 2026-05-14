//Write a program to find the sum of all the elements in an array.
//declare a variable to store the sum and initialize it to 0
let marks=[90,78,34,65]
let i,sum=0;
//iterate through the array and add each element to the sum variable
for(i=0;i<marks.length;i++)
{
    //add the current element to the sum variable
    sum+=marks[i];
}
//print the sum of all the elements in the array
console.log("Sum of all elements in the array:", sum)