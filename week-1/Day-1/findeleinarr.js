//Write a function to find the index of an element in an array. If the element is not found, return "not found".
function searchArr(arr,n)
{
    //declare a variable to store the result and initialize it to 0
    let i,result=0;
    //iterate through the array and check if the current element is equal to the given element
    for(i=0;i<arr.length;i++)
    {
        //if the current element is equal to the given element, return the index of the current element
        if(arr[i]==n)
        {
            return i;
        }
    }
    //if the given element is not found in the array, return "not found"
    return "not found"
}
//call the function with an array and an element to search for
let result=searchArr([1,2,3,4,5],4)
console.log(result)
