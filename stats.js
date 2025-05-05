document.addEventListener("DOMContentLoaded", () => {
    fetch("stats.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("expats-helped").textContent = data.expatsHelped;
            document.getElementById("stories-shared").textContent = data.storiesShared;
            document.getElementById("active-users").textContent = data.activeUsers;
        })
        .catch(error => console.error("Error loading stats:", error));
});