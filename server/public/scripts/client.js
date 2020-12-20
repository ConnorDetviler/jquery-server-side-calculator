$(document).ready(handleReady);

function handleReady() {
    $('#add-btn').on('click', function() {operatorSelect('add')});
    $('#subtract-btn').on('click', function() {operatorSelect('subtract')});
    $('#multiply-btn').on('click', function() {operatorSelect('multiply')});
    $('#divide-btn').on('click', function() {operatorSelect('divide')});
    $('#equals-btn').on('click', equalsButton);
    $('#clear-btn').on('click', clearButton);

    $.ajax({
        url: '/calc',
        type: 'GET',
      }).then(function(response) {
        console.log('response from server:', response);
        displayHistory(response.historyArray);
      });
} // end handleReady

let selectedOperator = null;
let errorMessage = '';

function operatorSelect(operator) {
    // remove class from all operator buttons
    $('.operator-btn').removeClass('selected-operator-btn')
    // add class to operator button pressed
    $(`#${operator}-btn`).addClass('selected-operator-btn')
    selectedOperator = operator;
} // end operatorSelect

function equalsButton() {
    let inputOne = $('#num-input-one');
    let inputTwo = $('#num-input-two');
    let dataToSend = {};

    // uses checkError function to make sure all data is present before attempting to send it to the server
    if (checkError(inputOne, inputTwo) === false) {
        dataToSend = {
            inputOne: inputOne.val(),
            inputTwo: inputTwo.val(),
            operator: selectedOperator
        }
        console.log('dataToSend:', dataToSend);

        $.ajax({
            url: '/calc',
            type: 'POST',
            data: dataToSend
          }).then(function(response) {
            console.log(response);
          });

          $.ajax({
            url: '/calc',
            type: 'GET',
          }).then(function(response) {
            console.log('response from server:', response);
            displayHistory(response.historyArray);
            displayAnswer(response.equals);
          });
    } else {
        $('#answer-display').text('ERROR - ' + errorMessage);
        errorMessage = '';
    }
} // end equalsButton

function clearButton () {
    selectedOperator = null;
    $('.operator-btn').removeClass('selected-operator-btn')
    $('#num-input-one').val(null);
    $('#num-input-two').val(null);
    $('#answer-display').text('-');
} // end clearButton

function checkError(inputOne, inputTwo) {
    if (selectedOperator === null && (!inputOne.val() || !inputTwo.val())) {
        errorMessage = 'Please enter two numbers and select an operator';
        return true;
    } else if (selectedOperator === null) {
        errorMessage = 'Please select an operator';
        return true;
    } else if (!inputOne.val() || !inputTwo.val()) {
        errorMessage = 'Please enter two numbers';
        return true;
    } else {
        return false; // returns false if there is no error
    }
} // end checkError

function displayHistory(historyArray) {
    $('#history-list').empty();
    for (let i = 0; i < historyArray.length; i++) {
        $('#history-list').append(`<li>${historyArray[i]}</li>`)
    }
} // end displayHistory

function displayAnswer(equals) {
    $('#answer-display').text(equals);
} // end displayAnswer