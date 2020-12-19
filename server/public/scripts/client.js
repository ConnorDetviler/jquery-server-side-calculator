$(document).ready(handleReady);

function handleReady() {
    $('#add-btn').on('click', function() {operatorSelect('add')});
    $('#subtract-btn').on('click', function() {operatorSelect('subtract')});
    $('#multiply-btn').on('click', function() {operatorSelect('multiply')});
    $('#divide-btn').on('click', function() {operatorSelect('divide')});
    // $('#equals-btn').on('click', );
    // $('#clear-btn').on('click', );
} // end handleReady

// equals triggers the packaging of data
// data includes the two numbers and whichever operator is chosen

// equals only works when operator is selected and there is a number in each field

let selectedOperator = '';
function operatorSelect(operator) {
    // remove class from all operator buttons
    $('.operator-btn').removeClass('selected-operator-btn')
    // add class to operator button pressed
    $(`#${operator}-btn`).addClass('selected-operator-btn')
    selectedOperator = operator;
}