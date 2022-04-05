const resolved =(num)=>{
    num ="RESOLVED"
    console.log(num);
}

const rejected =(num)=>{
    num ="REJECTED"
    console.log(num);
}

const process =new Promise((resolve,rejecte)=>{
    let num = 5;
    if(num>10){
        resolve(num);
    }
    else{
        rejecte(num);
    }
})

process.then((num) => resolved(num)).catch((num)  => rejected(num));