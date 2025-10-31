window.onload = function() {
    console.log("Page loaded");
    const searchButton = document.getElementById('searchButton');
    const superHeroInput = document.getElementById('super_hero');
    const result = document.getElementById('result');

searchButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    const query = superHeroInput.value.trim();

    fetch(`http://localhost/info2180-lab4/superheroes.php?query=${encodeURIComponent(query)}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text();
    })
    .then(data => {
        result.innerHTML = `<h2>RESULT</h2><hr>${data}`;
        
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
});
};