var form = document.getElementsByClassName('playerNumberButton')[0];
var playerNames = document.getElementsByClassName('playerNames')[0];
var bracket = document.getElementById('bracket')
var bracket1 = document.getElementById('bracket1')
var bracket2 = document.getElementById('bracket2')
var bracket3 = document.getElementById('bracket3')
var bracket4 = document.getElementById('bracket4')
var bracket5 = document.getElementById('bracket5')
var bracket6 = document.getElementById('bracket6')
var bracket7 = document.getElementById('bracket7')
var bracket8 = document.getElementById('bracket8')
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
        li.setAttribute('class','team')
        li.innerText = event.target.elements[i].value
        bracket.append(li)
        players.push(event.target.elements[i].value)
    }
    // let button = document.createElement('button')
    // button.setAttribute('type','submit')
    // button.setAttribute('class','btn btn-dark')
    // button.innerText = 'Next Round'
    // bracket.append(button)
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
        goals.innerText = 'Goals'
        goals.setAttribute('placeholder', 'Goals')
        assists.innerText = 'Assists'
        assists.setAttribute('placeholder', 'Assists')
        saves.innerText = 'Saves'
        saves.setAttribute('placeholder', 'Saves')
        shots.innerText = 'Shots'
        shots.setAttribute('placeholder', 'Shots')
        winnerLabel.innerText = 'Move ' + event.target.innerText + ' on?'
        winner.setAttribute('type', 'checkbox')
        formSubmit.setAttribute('type', 'submit')
        formSubmit.innerText = 'Submit'
        formLabel.innerText = event.target.innerText
        newForm.append(formLabel, goals, assists, saves, shots, winnerLabel, winner, formSubmit)
        playerForm.append(newForm)
})
playerForm.addEventListener('submit', function(event){
    event.preventDefault()
    var counter = 0
    while (counter < event.target.elements.length -2){
        if (counter === 0){
            console.log(event.target.children[counter].innerText)
            console.log(event.target.elements[counter].attributes[0].nodeValue + ' '+ event.target.elements[counter].value)
        }else {
        console.log(event.target.elements[counter].attributes[0].nodeValue + ' '+ event.target.elements[counter].value)
        }
        counter++
    }
    console.log(event);
    playerForm.innerHTML = ''
})
