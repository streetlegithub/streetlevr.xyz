document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const gameSections = document.querySelectorAll(".container");
    const titleSections = document.querySelectorAll(".titles");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        if (searchTerm.trim() === "") {
            titleSections.forEach(function (titleSection) {
                titleSection.style.display = "block";
            });
        } else {
            titleSections.forEach(function (titleSection) {
                titleSection.style.display = "none";
            });
        }

        gameSections.forEach(function (section) {
            const title = section.querySelector("h2").textContent.toLowerCase();
            const shouldShow = title.includes(searchTerm);
            section.style.display = shouldShow ? "block" : "none";
        });
    });
});