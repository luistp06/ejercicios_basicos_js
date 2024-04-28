const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];
let mayores= [];
let menores= [];
for (let i = 0; i<users.length; i++) {
  if (users[i].years >=18){
      let mayorusers  = users[i];
      mayores.push(mayorusers.name)
  }
  else{
      let minorusers  = users[i];
      menores.push(minorusers.name)
  }
  }
  console.log("usuarios mayores de edad",mayores)
  console.log("usuarios menores de edad",menores)
 

