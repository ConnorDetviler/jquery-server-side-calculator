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

function operatorSelect(operator) {
    console.log(operator);
}