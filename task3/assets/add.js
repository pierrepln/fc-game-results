(function () {

  document.querySelector("[data-add-game]").addEventListener("click", addGame);

  function addGame(e) {
    e.preventDefault();

    var results = document.querySelector(".results-list");
    var newResult = document.querySelectorAll(".results-list-item")[0].cloneNode(true);
    var playersName = [
      document.querySelector('input[name="player1"]').value,
      document.querySelector('input[name="player2"]').value
    ];

    newResult.querySelectorAll('.player span')[0].textContent = playersName[0];
    newResult.querySelectorAll('.player span')[1].textContent = playersName[1];
    if (results && newResult) {
      newResult.querySelector("[data-delete-game]").addEventListener("click", function (e) {
        e.target.parentElement.remove();
      });
      results.insertBefore(newResult, results.firstChild);
    }
  }
})();