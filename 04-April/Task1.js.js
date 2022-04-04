const num = 25468;
const str = num.toString();
console.log(str);
const result = [0,"-",str[0]];
console.log(result);
for(let i =1; i<str.length;i++){
    if(str[i-1]%2==0 && str[i]%2==0){
        result.push('-',str[i]);
    }else{
      result.push(str[i]);
    }
}
console.log(result.join(''));