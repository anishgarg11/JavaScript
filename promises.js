// const getPromise = () =>{
// return new Promise((resolve, reject) =>{
//     console.log("Delivery Attempet");
//    resolve("success");
//  reject("Technical Error");
// });
// };

// // resolve or pending
// let promise = getPromise();
// promise.then((res)=>{
//     console.log("Promise Fulfilled", res);
// });

// // // reject
// promise.catch((err)=>{
//     console.log("rejected", err);
// })

// function asynFunc1(){
// return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Data1");
//         resolve("Success");
//     }, 4000);   
// });
// }

// function asynFunc2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("Data2");
//             resolve("Success");
//         }, 6000);   
//     });
//     }

// console.log("Fetching Data1........");
// asynFunc1().then((res)=>{
//     console.log("Fetching Data2........");
// asynFunc2().then((res)=>{
// });
// });

