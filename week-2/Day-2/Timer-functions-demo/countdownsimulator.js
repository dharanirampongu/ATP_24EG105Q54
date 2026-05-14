// 2.OTP Countdown Simulator (Console App)
// ------------------------------------
        
//         Simulate OTP sending flow in Node.js:
        
//         Show “OTP Sent Successfully”
        
//         Start 10-second countdown
        
//         Allow resend only after countdown ends

console.log("OTP sent successfully")
let seconds=10
// setInterval returns an ID which can be used to clear the interval later
setInterval(()=>
{
        seconds--;
        console.log(`OTP can resend after ${seconds} seconds`)
        if(seconds===0)
        {
                console.log("Resend OTP");
                clearInterval(intervelId);
        }
},1000);

