//your JS code here. If required.
let count = 0

const counterEl = document.getElementById("counter")
const button = document.getElementById("incrementBtn")

button.addEventListener("click", function () {
  alert(count)         
  count = count + 1
  counterEl.textContent = count
})
