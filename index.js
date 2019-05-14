// Write your code here!

document.getElementById('main').remove()

const newHeader = document.createElement('h1')

document.body.appendChild(newHeader)

newHeader.id = 'victory'

newHeader.innerHTML = 'YOUR-NAME is the champion'
