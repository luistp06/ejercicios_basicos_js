const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda',
];
const nuevos = []
function removeDuplicates(list) {
  for (const element of list) {
    if(!nuevos.includes(element)) {
      nuevos.push(element)
    }
  }
  console.log(nuevos)
}
removeDuplicates(duplicates)