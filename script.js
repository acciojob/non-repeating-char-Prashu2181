function firstNonRepeatedChar(str) {
  let count = {};
  for(let i = 0; i < str.length; i++){
    let char = str[i];
    if(count[char] === undefined){
      count[char] = 1;
    }
    else{
      count[char] = count[char] + 1;
    }
  }


for(let i = 0; i < str.length; i++){
  if(count[str[i]] === 1){
    return str[i];
  }
}
return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
