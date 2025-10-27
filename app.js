window.onload = function() {
    console.log("Page loaded");
    const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
    fetch('http://localhost/info2180-lab4/superheroes.php')
    .then(response => response.text())
    .then(data => {
        alert(data);
    });
});
};