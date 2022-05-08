// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hide = document.getElementById("modal").hidden = true;
const articleHearts = document.querySelectorAll(".like-glyph");
function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
  .then(() => {
    
    heart.className = "activated-heart"
    if (heart.innerText === FULL_HEART){
      heart.innerText = EMPTY_HEART
    } else {
      heart.innerText = FULL_HEART
    }
  })
  .catch(() => {
    alert("Something went wrong!");
  }); 
}

for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
