document.addEventListener("DOMContentLoaded", () => {
  // your code here
 document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
 handleToDo(e.target.new.value)})
})

function handleToDo(todo){
  let p = document.createElement('p')
  let butt = document.createElement('button')
  butt.addEventListener('click', handleDelete)
  p.textContent = `${todo} `
  butt.textContent = 'x'
  p.appendChild(butt)

  document.querySelector('#list').appendChild(p)
}

function handleDelete(e){
 console.log(e.target.parentNode.remove())
}