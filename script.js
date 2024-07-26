const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', () => {
    const longUrl = document.getElementById('longURL').value;
    const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`;
    const shortUrlTextarea = document.getElementById("shortURL");

    fetch(apiUrl)
    .then(response => response.text()) // Appel de la méthode .text()
    .then(data => shortUrlTextarea.value = data)
    .catch(error => shortUrlTextarea.value = "Error: Unable to shorten URL");
});

reloadBtn.addEventListener("click", () => location.reload());
