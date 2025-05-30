function sayHello(name, city, state) {
  if (Array.isArray(name)) {
    return `Hello ${name[0]} ${name[1]}! Welcome to ${city}, ${state}`;
  }
}


console.log(sayHello(['kalisa','yvan'],'MUSANZE','KINIGI'))