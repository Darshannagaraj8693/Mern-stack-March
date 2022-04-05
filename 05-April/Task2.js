function adder (str,str1){
    let str2 = str. concat(str1);
    console.log (str2);
    }

function sender (callback){
    str ="darshan";
    str1 ="!";
    callback(str,str1);
    }

    sender(adder);