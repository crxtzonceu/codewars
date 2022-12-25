/* 
 === Stretch Goals ===
~ Add your favorite songs = NO NEED
~ Change style of button of currently playing song = DONE
~ Hide the YouTube player so you just hear the music. = DONE
*/
const player = document.getElementById("player")
player.style.display = "none" // hide the iframe by default

// Event Listeners
document.addEventListener('click', e => {
  // only listens for the buttons
    if(e.target.tagName == 'BUTTON') {
        playSong(e.target.dataset.link)
    }
})

// Functions
function playSong(link) {
  // set the src attr of the iframe to the selected song
  player.setAttribute('src', `https://www.youtube.com/embed/${link}?autoplay=1`)
  // get all the button elements
  const vids = document.querySelectorAll("button")
  // remove the highlighted class
  vids.forEach(vid => vid.classList.remove('highlighted'))
  // add the highlighted class to the selected button 
  document.querySelector(`button[data-link="${link}"]`).classList.add('highlighted')
}