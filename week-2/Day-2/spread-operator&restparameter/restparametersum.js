const findSum=(...numbers)=>{
    return numbers.reduce((sum,num)=>sum+num)
}
// The rest parameter allows us to represent an indefinite number of arguments as an array. In this example, the findSum function takes any number of arguments and sums them up using the reduce method.
let res=findSum(10,20,30)
console.log(res)