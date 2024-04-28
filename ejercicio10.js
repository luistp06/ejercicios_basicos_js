const numbers = [12, 21, 38, 5, 45, 37, 6,];
let total = 0;
function average(numberList) {
  for (let i = 0; i < numberList.length; i++) { 
    total = total + numberList[i]/numberList.length;
    }
    console.log(total)
}
average(numbers)