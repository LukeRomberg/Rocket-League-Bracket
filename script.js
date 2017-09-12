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
        li.setAttribute('id','team')
        li.innerText = event.target.elements[i].value
        bracket.append(li)
        players.push(event.target.elements[i].value)

    }
    hide(playerNames)
})

// Temp code
// function deselect(e) {
//   $('.pop').slideFadeToggle(function() {
//     e.removeClass('selected');
//   });
// }
//
// $(function() {
//   $('#team').on('click', function() {
//     if($(this).hasClass('selected')) {
//       deselect($(this));
//     } else {
//       $(this).addClass('selected');
//       $('.pop').slideFadeToggle();
//     }
//     return false;
//   });
//
//   $('.close').on('click', function() {
//     deselect($('#contact'));
//     return false;
//   });
// });
//
// $.fn.slideFadeToggle = function(easing, callback) {
//   return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
// };
// //end code
