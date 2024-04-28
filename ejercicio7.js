function greaterNumber(numberOne , numberTwo) {
    if(numberOne > numberTwo){
        console.log(numberOne)
    }
    else if(numberOne <numberTwo){
        console.log(numberTwo)
    }
    else{
        console.log("No hay un número más grande")
  }
  return;
}
console.log (greaterNumber (30,31));