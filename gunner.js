
const cannonsReady = (gunners) => {
  //let gun = { 'queen': 'aye', 'boy':'nay', 'fred':'aye' }

  for (people in gunners) {
    if (gunners[people] !== "aye") {
      return "Shiver me timbers!";
    }
  }
  return "Fire!";
};
   
   
   