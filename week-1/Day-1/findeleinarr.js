function searchArr(arr,n)
{
    let i,result=0;
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]==n)
        {
            return i;
        }
    }
    return "not found"
}
let result=searchArr([1,2,3,4,5],4)
console.log(result)
