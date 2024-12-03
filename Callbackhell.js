// function getData(dataId){// 4s
//     return new Promise((resolve, reject)=>{
//      setTimeout(() =>{
//         console.log("data", dataId);
//         resolve("Attempt Successfull");
//     },2000);
// });
// } 

// // Promise Chain
// getData(1)
// .then((res)=>{
//     return getData(2);
// })
// .then((res)=>{
//     return getData(3);
// })
// .then((res)=>{
//     console.log(res);
// });
   

// // Callback hell
// console.log("getting Data 1.....");
// getData(1, () =>{
//     console.log("getting Data 2.....");
//     getData(2,() =>{
//         console.log("getting Data 3.....");

//         getData(3, () =>{
//             console.log("getting Data 4.....");

//             getData(4);
//         })
//     })
// });
