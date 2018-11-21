(function () {

  var initialNumberOfgames = document.querySelectorAll(".results-list-item").length;

  // Simulating user clicks on 'add game'  
  document.querySelector("[data-add-game]").click();

  var newNumberOfgames = document.querySelectorAll(".results-list-item").length;

  if (initialNumberOfgames + 1 === newNumberOfgames) {
    console.log('Add Game: TEST SUCCESS')
  } else {
    console.error('Add Game: TEST FAILED');
  }

})();