/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = "Prince Chukwu"

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
let idName = document.querySelector("#name")
idName.textContent = myName

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = "2022"

// Step 4: place the value of the current year variable into the HTML file
let idYear = document.querySelector("#year")
idYear.textContent = currentYear

// Step 5: declare and instantiate a variable to hold the name of your picture
let myPic = "images/profile.jpg"

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

document.querySelector("img").setAttribute("src", myPic)


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let myFavFoods = ["Ripe plantain", "Rice", "beans"]

// Step 2: place the values of the favorite foods variable into the HTML file
let favFoods = document.querySelector("#food")
favFoods.textContent = myFavFoods

// Step 3: declare and instantiate a variable to hold another favorite food
let anotherFood = "potato"

// Step 4: add the variable holding another favorite food to the favorite food array
myFavFoods.push(anotherFood)

// Step 5: repeat Step 2

favFoods.textContent = myFavFoods
// Step 6: remove the first element in the favorite foods array
myFavFoods.shift()

// Step 7: repeat Step 2
favFoods.textContent = myFavFoods

// Step 8: remove the last element in the favorite foods array
myFavFoods.pop()

// Step 7: repeat Step 2
favFoods.textContent = myFavFoods


