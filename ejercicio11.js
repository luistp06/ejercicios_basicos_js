const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
let total = 0;
function averageWord(list) {
    for (element of list) {
        if(typeof element === 'string'){
            total = total + element.length;
        }
        if(typeof element === 'number'){
            total= total + element;
        }
    }
 console.log(total)
}
averageWord(mixedElements)