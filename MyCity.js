function sayHello(name, city, state) {
  if (Array.isArray(name)) {
    let names = name.join(" ");

    return `Hello, ${names}! Welcome to ${city}, ${state}!`;
  }
}

console.log(sayHello(["kalisa", "yvan"], "MUSANZE", "KINIGI"));
