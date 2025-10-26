document.getElementById('searchButton').addEventListener('click', function() {
    const httpRequest = new XMLHttpRequest();
    // URL must be a string; include the PHP filename in quotes (adjust path if the file is in a different folder)
    httpRequest.open('GET', 'superheroes.php', true);
    console.log('Button clicked, sending request...');
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            alert(httpRequest.responseText);   
        }
    };
    httpRequest.send();
});