// # 1.Exam portal simulator:
// # -----------------------------
// # When a student submits an exam:

// #         Immediately show: “Exam submitted successfully”
// #         After 2 seconds → show: “Evaluating answers…”
// #         After 4 seconds → show: “Result: Pass”

// Simulate the above flow using setTimeout in Node.js:
setTimeout(()=>
{
   console.log("Evaluating answers..")
},2000)
// The above setTimeout will execute after 2 seconds, but the next line will execute immediately
setTimeout(()=>
{
        console.log("Result:pass")
},4000)
console.log("Exam submitted successfully")