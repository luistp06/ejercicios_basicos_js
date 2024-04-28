const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 125 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];
  let shortmovie=[];
  let mediummovie=[];
  let longmovie=[];

  for (let i = 0; i<movies.length; i++) {
      if (movies[i].durationInMinutes <100){
           let short = movies[i];
           shortmovie.push(short)
      }  
      else if(movies[i].durationInMinutes >100 && movies[i].durationInMinutes <200){
        let medium =movies[i];
        mediummovie.push(medium)
        
      }
      else{
 
         let long =movies[i];
        longmovie.push(long)
      }
    }
    console.log(shortmovie)
    console.log(mediummovie)
    console.log(longmovie)

    