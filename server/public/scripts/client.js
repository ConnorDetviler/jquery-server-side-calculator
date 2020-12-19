$(document).ready(handleReady);

function handleReady() {
    $('#add-btn').on('click', function() {operatorSelect('add')});
    $('#subtract-btn').on('click', function() {operatorSelect('subtract')});
    $('#multiply-btn').on('click', function() {operatorSelect('multiply')});
    $('#divide-btn').on('click', function() {operatorSelect('divide')});
    $('#equals-btn').on('click', equalsButton);
    // $('#clear-btn').on('click', );
} // end handleReady

let selectedOperator = null;
let errorMessage = '';

// equals triggers the packaging of data
// data includes the two numbers and whichever operator is chosen

// equals only works when operator is selected and there is a number in each field


function operatorSelect(operator) {
    // remove class from all operator buttons
    $('.operator-btn').removeClass('selected-operator-btn')
    // add class to operator button pressed
    $(`#${operator}-btn`).addClass('selected-operator-btn')
    selectedOperator = operator;
}

function equalsButton() {
    let inputOne = $('#num-input-one');
    let inputTwo = $('#num-input-two');
    let dataToSend = {};

    if (checkError(inputOne, inputTwo) === false) {
        dataToSend = {
            inputOne: Number(inputOne.val()),
            inputTwo: Number(inputTwo.val()),
            operator: selectedOperator
        }
        console.log('dataToSend:', dataToSend);
    } else {
        $('#answer-display').text('ERROR - ' + errorMessage);
        errorMessage = '';
    }
}


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
}