function createUser (name) {
    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;
  
    return { name, getReputation, giveReputation };
  }
  

function createPlayer (name, level) {

    const { getReputation, giveReputation } = createUser(name);
  
    const increaseLevel = () => level++;
    
    return { name, getReputation, giveReputation, increaseLevel };
  }

  const player = createPlayer("Raj", 1);

  console.log(player.name);
  console.log(player.getReputation());
  console.log(player.giveReputation(2));
  console.log(player.increaseLevel());