var form = document.getElementsByClassName('playerNumberButton')[0];
var playerNames = document.getElementsByClassName('playerNames')[0];
var nextRoundButton = document.getElementById('nextRoundButton')
var bracket = document.getElementById('bracket')
var bracketHouse = document.getElementById('bracketHouse')
var winners = []
form.addEventListener('submit', function(event){
    event.preventDefault()
    var playerNumber = event.target.elements.playerNumberInput.valueAsNumber
        let label = document.createElement('label')
        label.setAttribute('for', 'PlayersNames')
        label.innerText = 'Input the team names below.'
        playerNames.append(label)
            populateTeamNames(playerNumber);
            hide(form)
})



function populateTeamNames(number){
    if (number > 0){
        for (var i=0;i<number;i++){
            playerNames.append(document.createElement('input'))
        }
    } else {
            for (var i=0;i<16;i++){
                playerNames.append(document.createElement('input'))
            }
      }
    let button = document.createElement('button')
    button.setAttribute('type','submit')
    button.setAttribute('class','btn btn-dark')
    button.innerText = 'Submit'
    playerNames.append(button)
}


function hide(element) {
  element.style.display = 'none';
};

var players = []
playerNames.addEventListener('submit', (event)=>{
    event.preventDefault()
    for (var i=0;i<event.target.elements.length-1;i++){
        var li = document.createElement('button')
        li.setAttribute('id','teamNumber' + [i])
        li.setAttribute('class','team btn btn-secondary')
        li.innerText = event.target.elements[i].value
        bracketStart.append(li)
        players.push(event.target.elements[i].value)
    }
    let button = document.createElement('button')
    button.setAttribute('type','submit')
    button.setAttribute('class','btn btn-dark')
    button.innerText = 'Next Round'
    nextRoundButton.append(button)
    hide(playerNames)
})
// bracket.addEventListener('submit', function(event){
//     event.preventDefault()
//
// })
var data = document.getElementById('data')
var playerForm = document.getElementById('playerForm')

bracket.addEventListener('click', function(event){
    playerForm.innerHTML = ''
    var formSubmit = document.createElement('button')
    var goals = document.createElement('input')
    var assists = document.createElement('input')
    var saves = document.createElement('input')
    var shots = document.createElement('input')
    var winnerLabel = document.createElement('label')
    var winner = document.createElement('input')
    var formLabel = document.createElement('h3')
    var newForm = document.createElement('form')
    var winnerLabelDiv = document.createElement('div')
        goals.innerText = 'Goals'
        goals.setAttribute('placeholder', 'Goals')
        assists.innerText = 'Assists'
        assists.setAttribute('placeholder', 'Assists')
        saves.innerText = 'Saves'
        saves.setAttribute('placeholder', 'Saves')
        shots.innerText = 'Shots'
        shots.setAttribute('placeholder', 'Shots')
        winnerLabel.innerText = 'Did ' + event.target.innerText + ' win?'
        winner.setAttribute('type', 'checkbox')
        winner.setAttribute('name', 'winner')
        winner.setAttribute('value', 'didWin')
        formSubmit.setAttribute('type', 'submit')
        formSubmit.setAttribute('class', 'btn btn-dark')
        formSubmit.innerText = 'Submit'
        formLabel.innerText = event.target.innerText
        newForm.setAttribute('id','playerForms')
        winnerLabelDiv.append(winnerLabel, winner)
        newForm.append(formLabel, goals, assists, saves, shots, winnerLabelDiv, formSubmit)
        playerForm.append(newForm)
})
playerForm.addEventListener('submit', function(event){
    event.preventDefault()
    var counter = 0
    while (counter < event.target.elements.length -2){
        if (counter === 0){
            data.append(event.target.children[counter].innerText)
            data.append(event.target.elements[counter].attributes[0].nodeValue + ' '+ event.target.elements[counter].value)
        }else {
        data.append(event.target.elements[counter].attributes[0].nodeValue + ' '+ event.target.elements[counter].value)
        }
        counter++
    }
    if (event.target.children[6].checked == true){
        winners.push(event.target.children[0].innerText);
    }
    playerForm.innerHTML = ''
})
nextRoundButton.addEventListener('click', function(event){
    if (winners.length === 0){
        alert('You must select winners.')
    }else{
        var winnersBracket = document.createElement('div')
        bracket.append(winnersBracket)
        for (var i = 0; i < winners.length; i++) {
                var li = document.createElement('button')
                var indent = document.createElement('br')
                li.setAttribute('id','teamNumber' + [i])
                li.setAttribute('class','team')
                li.innerText = winners[i]
                winnersBracket.append(li, indent)
        }
    }
    winners = []
})
