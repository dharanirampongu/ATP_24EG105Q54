const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
let res=movies.filter(m=>m.genre=="Sci-Fi")
console.log(res)
let res1=movies.map(m=>`${m.title=="Inception"} (${m.rating==8.8})`)
console.log(res1)
let res2=movies.reduce((m,sum)=>sum+m.rating)/movies.length
console.log(res2)
let res3=movies.find(m=>m.title=="Joker")
console.log(res3)
let res4=movies.findIndex(m=>m.title=="Avengers")
console.log(res4)