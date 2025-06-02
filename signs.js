function neutralise(s1, s2) {
    // Here be dragons!
   if(s1 && s2 === '+'){
     return '+'
     } else if (s1 && s2 === "-") { return '-'
     } else if( s1 == "-" && s2 == "+"){
       return 0
     } 
}
      
console.log(neutralise('-','+'))