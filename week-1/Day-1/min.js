//Write a program to find the smallest number in an array.
let marks=[90,78,34,65,105]
let min=marks[0];
//iterate through the array and check if the current element is less than the minimum element
for(let i=0;i<marks.length;i++)
{
    //if the current element is less than the minimum element, update the minimum element
    if(marks[i]<min)
    {
        //update the minimum element
        min=marks[i]
    }
}
console.log("smallest",min)