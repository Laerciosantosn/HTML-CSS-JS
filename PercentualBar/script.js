const publication = document.querySelector('.publicacoes')

const barLoad = document.createElement('div')

barLoad.style.width = '0'
barLoad.style.height = '4px'
barLoad.style.backgroundColor = '#6633cc'
barLoad.style.position = 'fixed'
barLoad.style.top = '0'
barLoad.style.left = '0'

document.body.append(barLoad)

document.addEventListener('scroll', () => {
const pageHeight = publication.offsetHeight
console.log(pageHeight);
const pagePositionY = window.pageYOffset
console.log(pagePositionY);

const loadProgress = (pagePositionY * 100 )/ pageHeight
  barLoad.style.width = loadProgress + "%"

})