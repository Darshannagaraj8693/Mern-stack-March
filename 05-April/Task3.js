function duplicate (str,firstChar){
  for (let i=0;i<str.length;i++)
  {
      firstChar+=(str.charAt(i)+str.charAt(i));

  }
  console.log(firstChar);
}

function combiner (callback)
{
    str = "abc";
    let firstChar="";
    callback(str,firstChar);
}
combiner(duplicate);