// Fetch JSON data dynamically (assuming 'reddit_jokes.json' is accessible in the same directory)
fetch('./reddit_jokes.json')
    .then(response => response.json())
    .then(data => {
        console.log("Data loaded successfully.");
        window.jokes = data; // Store jokes globally
        window.length = data.length; // Store length globally

        // Initialize the first joke
        make_joke();
    })
    .catch(error => console.error("Error loading jokes:", error));

// Function to display a new joke
window.make_joke = () => {
    if (window.jokes && window.length) {
        document.getElementsByTagName("h2")[0].innerHTML = "Loading...";
        let joke_index = Math.floor(Math.random() * window.length);
        let joke = window.jokes[joke_index];

        document.getElementsByTagName("h2")[0].innerHTML = joke.title;
        document.getElementsByTagName("p")[0].innerHTML = joke.body;
    } else {
        console.error("Jokes data not loaded yet.");
    }
};
