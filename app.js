const input = document.querySelector("#item");
const submitButton = document.querySelector("#submit");
const ul = document.querySelector("#ul");
const clearAll = document.querySelector("#clearAll")
let itemsArray = []
localStorage.setItem('items',JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

function listMaker (text) {
  const list = document.createElement('li');
  list.textContent = text;
  ul.appendChild(list)
}

submitButton.addEventListener("click", () => {
  listMaker(input.value)
  itemsArray.push(input.value)
  localStorage.setItem('items',JSON.stringify(itemsArray))
})

if (input.value == ""){
  list = null
}

data.forEach(item => {
  listMaker(item)
})

clearAll.addEventListener('click',clear)
function clear () {
  localStorage.clear()
  while(ul.firstChild){
    ul.removeChild(ul.firstChild)
  }
}

if (localStorage.getItem('items')){
  items = JSON.parse(localStorage.getItem('items'))
}
else{
  items = []
}