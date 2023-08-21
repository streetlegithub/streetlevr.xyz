document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const modSections = document.querySelectorAll(".section");
    const adSections = document.querySelectorAll(".ad-section");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();

        if (searchTerm.trim() === "") {
            adSections.forEach(function (adSection) {
                adSection.style.display = "block";
            });
        } else {
            adSections.forEach(function (adSection) {
                adSection.style.display = "none";
            });
        }

        modSections.forEach(function (section) {
            const title = section.querySelector("h2").textContent.toLowerCase();
            const shouldShow = title.includes(searchTerm);
            section.style.display = shouldShow ? "block" : "none";
        });
    });
});
