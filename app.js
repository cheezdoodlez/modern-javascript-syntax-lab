//exercise 1 ==========================



// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const numsTwo = nums.map(x => x * 2)

console.log(numsTwo)



//exercise 2 ==========================

const pizzaToppings = ["pieapple", "olives", "anchovies"]

const [firstTop, secondTop] = pizzaToppings

console.log(firstTop)
console.log(secondTop)



//exercise 3 ===========================

const car = {
    make: 'Audi',
    model: 'q5'
};

const {make, model} = car

console.log(make)
console.log(model)



//exercise 4 ===========================

const pizzaTopping = ["pineapple", "olives", "anchovies"]

const controversialPizzaTopping = [...pizzaTopping]
controversialPizzaTopping.push('mushroom')
console.log(pizzaTopping)
console.log(controversialPizzaTopping)
/* creates aduplicate instead of a
 new reference. thats why when the duplicate 
 is called the push command only applied to 
 the new duplicate array  */



//exercise 5 =============================

const cars = {
    make: 'Audi',
    model: 'q5',
  };
  
const myCar = {...cars}
myCar.model = 'q7'
myCar.make = 'notAudi'

console.log('OG', cars)
console.log('clone', myCar)



//exercise 6 ==============================

const propertyName = 'username'
const userProfile = {
    [propertyName]: 'Zaki'
}


  console.log(userProfile)



// exercise 7 =============================

// exercise 8 =============================

function catExercise(noun = 'cat', adjective = 'white' ){
console.log(`The ${noun} is ${adjective}`)
}

catExercise('mouse', 'black')



// exercise 9 =============================

let pizza = 'tasty';


let pizzaTaste = pizza === 'tasty' ? 'Yum! :D' : 'Ew! D:'

console.log(pizzaTaste)

// exercise 10 ============================

// const result1 = 'bar' && 'foo';
// const result2 = false || 243;
// const result3 = 42 && false;
// // const result4 = myVar || 3000;

// console.log('result1:', result1); // 'foo' bcz its the last result of truthy variables
// console.log('result2:', result2); // 243  is truthy
// console.log('result3:', result3); // false is falsy value
// console.log('result4:', result4); // 3000 bcz its the truthy

const localLangConfig = null;

const LANG = localLangConfig || 'english'
console.log('language setting:', LANG)



const userSavedTheme = null

const USER_THEME = userSavedTheme || 'Light'
console.log('user theme:', USER_THEME)

// execise 11 =============================


const adventurer = {
    name: 'Alice',
  };
  
  let cat = adventurer.cat?.name
  
  console.log(cat);
  