const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
  let numwords = [];
  for (const element of list) {
    if (numwords[element]){
        numwords[element] +=1;
    }
  else{
    numwords[element]=1;
  }
  console.log(numwords)
  }
}
repeatCounter(words)