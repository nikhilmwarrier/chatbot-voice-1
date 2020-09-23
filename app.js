const button = document.querySelector(".talk");
const content = document.querySelector(".content");


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();


const greetings = [
  "I'm fine, thank you!",
  "Shut up, you idiot",
  "I'm fine, thank you",
  "I'm fine, thank you",
  "I'm fine, thank you",
  ];
  
const smallTalk = [
  "I am a bot. What is your name?",
  "They call me a bot. What about you?"
  ] 
  

recognition.onstart = function() {
  console.log("It's Yippee Time!");
  content.innerHTML = "OK!";
};


recognition.onresult = function(event) {
  // console.log(event);
  
  const current = event.resultIndex;
  
  
  const transcript = event.results[current][0].transcript;
  console.log(transcript);
  content.textContent = transcript;
  
  ReadOutLoud(transcript);
};


// event listener to button

button.addEventListener("click", () => {
  recognition.start();
});

//output

function ReadOutLoud(message){
  
  const speech = new SpeechSynthesisUtterance();
  
  // speech.text = "Didn't catch that, sorry!"; //default fallback
  
  
  if(message.includes('how are you')){
    const finalText = 
      greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }
  
  else if (message.includes('what is your name')) {
    const finalText =
      smallTalk[Math.floor(Math.random() * smallTalk.length)];
    speech.text = finalText;
    
  }
  
  else if (message.includes('my name is nikhil || my name is Nikhil || I am Nikhil || I am nikhil')) {
     const finalText = "Oh, Hello Nikhil!";
     speech.text = finalText;
  }
  
  
  speech.volume = 1;
  speech.rate = 1.0;
  speech.pitch = 1.2;
  
  window.speechSynthesis.speak(speech);
  
}