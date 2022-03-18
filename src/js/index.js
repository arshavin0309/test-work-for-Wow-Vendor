const gamesList = document.querySelector('.games__list')

const gamesItem = document.createElement('a')
gamesItem.classList.add('games__item')
gamesItem.href = ''

const gamesBox = document.createElement('div')
gamesBox.classList.add('games__box')

const gamesImg = document.createElement('img')
gamesImg.classList.add('games__img')
gamesImg.src="img/games-none-image.jpg"

const gamesSpan = document.createElement('span')
gamesSpan.classList.add('games__span')
gamesSpan.classList.add('games__span-blue')
gamesSpan.textContent = 'Game Tag'

const gamesHeading = document.createElement('h3')
gamesHeading.classList.add('games__heading')
gamesHeading.textContent = 'New card'

const gamesStars = document.createElement('div')
gamesStars.classList.add('games__stars')

const gamesInfo = document.createElement('p')
gamesInfo.classList.add('games__info')
gamesInfo.textContent = 'Realise game'

const svg = document.createElement('svg')
svg.classList.add('games__star')
svg.classList.add('grey__star')
svg.innerHTML = '<use xlink:href="img/sprite.svg#star"></use>'
const use = document.createElement('use')

const gamesNumber = document.createElement('div')
gamesNumber.classList.add('games__games')
gamesNumber.textContent = '0'

const gamesPrices = document.createElement('div')
gamesPrices.classList.add('games__prices')

const btnAddCard = document.querySelector('.games__btn-add')

let createCard = ()=> {
    console.log('Карточка добавлена')

    gamesList.append(gamesItem)
    gamesItem.append(gamesBox)
    gamesBox.append(gamesImg)
    gamesBox.append(gamesSpan)
    gamesBox.append(gamesHeading)
    gamesBox.append(gamesStars)
    gamesStars.append(svg)
    svg.append(use)
    gamesBox.append(gamesInfo)
    gamesItem.append(gamesPrices)
}

btnAddCard.addEventListener('click', (e)=>{
    e.preventDefault()
    createCard()
})

$( function() {
    $( "#accordion" ).accordion();
    } );