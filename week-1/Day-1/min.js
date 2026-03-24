let marks=[90,78,34,65,105]
let min=marks[0];
for(let i=0;i<marks.length;i++)
{
    if(marks[i]<min)
    {
        min=marks[i]
    }
}
console.log("smallest",min)