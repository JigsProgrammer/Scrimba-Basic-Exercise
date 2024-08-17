let fruit = ["apple", "orange", "apple", "apple", "orange"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function arrangeFruits() {
    for (let i = 0; i < fruit.length; i++) { // Use a for loop to go all through the indices of the fruit array //
        if (fruit[i] === "apple") { //Now that the for loop goes through everything, if-elseif is used to find which are apples and which are not. Once conditions are fulfilled, appended to respective places using .textContent with += specific operator to put all without deleting previous ones//
            appleShelf.textContent += fruit[i] + " "
        } else if (fruit[i] === "orange") {
            orangeShelf.textContent += fruit[i] + " "
        }
    }
}

arrangeFruits()
