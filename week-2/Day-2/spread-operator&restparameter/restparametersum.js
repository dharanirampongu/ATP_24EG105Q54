const findSum=(...numbers)=>{
    return numbers.reduce((sum,num)=>sum+num)


}
let res=findSum(10,20,30)
console.log(res)