document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')
  form.addEventListener('submit', function(e){
    e.preventDefault()
    let input = document.getElementById('new-task-description')
    const tasks = document.getElementById('tasks')
    const li = document.createElement('li')
    const button = document.createElement('button')
    const text = document.createElement('text')
    text.innerText = input.value
    button.innerText = 'x'
    button.addEventListener('click', (ev) => {
      ev.target.parentNode.remove()
    })
    li.appendChild(text)
    li.appendChild(button)
    tasks.appendChild(li)
    input.value = ''
  }) 

  
});
