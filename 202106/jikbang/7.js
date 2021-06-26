function findAllHobbyists(hobby, hobbies) {
    let dict = {};

    for (const [name, value] of Object.entries(hobbies)) {
        for (const hobby of value) {
            const temp = {};
             temp[hobby] = name;

            dict = {
                ...dict,
                ...temp,
            }
        }
    }


    return dict[hobby];
  }
  
  var hobbies = {
    "Steve": ['Fashion', 'Piano', 'Reading'],
    "Patty": ['Drama', 'Magic', 'Pets'],
    "Chad": ['Puzzles', 'Pets', 'Yoga']
  };
  
  console.log(findAllHobbyists('Yoga', hobbies));