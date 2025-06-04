
function neutralise(s1, s2) {

    let number = ''
    for (let i = 0; i < s1.length; i++){
        
        let item1 = s1[i]
        let item2 = s2[i]
        
        if (item1 === item2) {
            number += item1
        } else {
            number += 0
            
            }
    }

    return number
  
}



function neutralise(s1, s2) {
  // Here be dragons!
  let result = "";
  for (let i = 0; i < s1.length; i++) {
    let item1 = s1[i];
    let item2 = s2[i];

    if (item1 === item2) {
      result += item1;
    } else {
      result += 0;
    }
  }
  return result;
}



  