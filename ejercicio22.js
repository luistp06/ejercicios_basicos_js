const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
let result=[]
for (let i = 0; i<foodSchedule.length; i++) {
    if (foodSchedule[i].isVegan == true){
        let vegan = foodSchedule[i]
        result.push(vegan.name)   
    }
    else{
        result.push(fruits[i])
    }
   
}
console.log(result);