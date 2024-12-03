function getData(dataId){
     return new Promise((resolve, reject) =>{
        setTimeout(()=>{
     console.log("Delivery Attempet");
        resolve("success");
    },3000);
});
     }

     // async - await
     async function getAllData(){
        await getData(1);
        await getData(2);
        await getData(3);
        await getData(4);
     };
    