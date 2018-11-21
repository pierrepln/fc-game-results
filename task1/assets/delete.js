(function () {

    document.querySelectorAll("[data-delete-game]").forEach(function (item) {
        item.addEventListener("click", function (e) {
            e.target.parentElement.remove();
        });
    });

})();