//Write a function to calculate the sum of all the elements in an array.
function marks(a)
{
    //declare a variable to store the sum and initialize it to 0
    let i,sum=0;
    //iterate through the array and add each element to the sum variable
for(i=0;i<a.length;i++)
{
    //add the current element to the sum variable
    sum+=a[i];
}
console.log(sum)
}
//call the function with an array of marks
let sum=marks(a=[100,98,99]);