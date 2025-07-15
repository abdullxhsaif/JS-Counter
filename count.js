const countDisplay = document.getElementById("count");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");
let count = 0;

incrementButton.addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;
})
decrementButton.addEventListener("click", function () {
    count--;
    countDisplay.textContent = count;
})
resetButton.addEventListener("click", function () {
    count = 0;
    countDisplay.textContent = count;
})