import data from './reddit_jokes.json';
// console.log(data.length)
// document.getElementsByTagName("h2")[0].innerHTML = "hello "
window.make_joke = () => {
    // console.log(123);
    document.getElementsByTagName("h2")[0].innerHTML = "Loading"
    let joke_index = Math.floor(Math.random() * data.length - 1)
    let joke = data[joke_index]
    
    document.getElementsByTagName("h2")[0].innerHTML = joke.title
    document.getElementsByTagName("p")[0].innerHTML = joke.body
    return "done"
}
make_joke()
// make_joke()

// let btn = document.getElementsByTagName("a")[0]
// btn.addEventListener('click',dojoke(1))
