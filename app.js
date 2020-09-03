const button = document.querySelector(".talk");
const content = document.querySelector(".content");


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


recognition.onstart = function() {
  console.log("It's Yippee Time!");
};


recognition.onresult = function(event) {
  console.log(event);
};


// event listener to button

button.addEventListener("click", () => {
  recognition.start();
});