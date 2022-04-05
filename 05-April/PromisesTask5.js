const result = new Promise((resolve, reject) =>{
    let message = "Hello!";
    setTimeout(()=> {
        reject(message);
    }, 1000); setTimeout
})

Promise.all([result]).catch((res)=>{
    console.log(res);
})