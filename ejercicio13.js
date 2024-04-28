const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  let name = "";
  function nameFinder(nameList,name) {
    for (let i = 0; i < nameList.length; i++) {
    
    }
    if(nameList.includes(name)){
        console.log("true",nameList.indexOf(name)+1);
    }
    else{
        console.log("false")
    }
  }
  nameFinder(names,"Jessica")