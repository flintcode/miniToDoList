const input = document.querySelector("#item");
const submitButton = document.querySelector("#submit");
const listItem = document.querySelector("#toDoItem");
const clearAll = document.querySelector("#clearAll")

submitButton.addEventListener("click", (e) => {
  let list = document.createElement("li")
  listItem.classList.add("itemsInList")
  listItem.appendChild(list)
  list.innerHTML += input.value
})

if (input.value == ""){
  list = null
}

function clear () {
  itemsInList.forEach(item => {
    item.addEventListener('click',remove)
  })
}

function remove () {
  listItem.forEach()
}