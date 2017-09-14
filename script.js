var form = document.getElementsByClassName('playerNumberButton')[0];
var playerNames = document.getElementsByClassName('playerNames')[0];
var bracket = document.getElementById('bracket')

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
    hide(playerNames)
})
var data = document.getElementById('data')
var playerForm = document.getElementById('playerForm')

bracket.addEventListener('click', function(event){
    var formSubmit = document.createElement('button')
    var goals = document.createElement('input')
    var assists = document.createElement('input')
    var saves = document.createElement('input')
    var shots = document.createElement('input')
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
        formSubmit.setAttribute('type', 'submit')
        formSubmit.innerText = 'Submit'
        formLabel.innerText = event.target.innerText
        newForm.append(formLabel, goals, assists, saves, shots, formSubmit)
        playerForm.append(newForm)
})
playerForm.addEventListener('submit', function(event){
    event.preventDefault()
    for (var i = 0; i < event.target.elements.length; i++) {
        if (i = 0){
            console.log(event.target.children[i].innerText);
        }else {
        console.log(event.target.elements[i].attributes[0].nodeValue + ' '+ event.target.elements[i].value)
        }
    }
}
    playerForm.innerHTML = ''
})
