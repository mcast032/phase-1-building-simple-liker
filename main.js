// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  // Select all hearts and the error modal
  const hearts = document.querySelectorAll('.like-glyph');
  const errorModal = document.getElementById('modal');
  const errorMessage = document.getElementById('modal-message');

  // Add event listeners to all hearts
  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          // Toggle heart state on successful server response
          if (heart.innerText === '♡') {
            heart.innerText = '♥';
            heart.classList.add('activated-heart');
          } else {
            heart.innerText = '♡';
            heart.classList.remove('activated-heart');
          }
        })
        .catch(error => {
          // Display error modal on server error
          errorModal.classList.remove('hidden');
          errorMessage.innerText = error;

          // Hide error modal after 3 seconds
          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});





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
