const button = document.querySelector(".talk");
const kbdButton = document.querySelector("#goText")
const kbdIn  = document.querySelector("#textInput");
const content = document.querySelector(".query");
const response = document.querySelector(".response");


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
  "I am Zetta. What is your name?",
  "They call me Zetta. What about you?"
  ] 
  

recognition.onstart = function() {
  console.log("It's Yippee Time!");
  content.innerHTML = "OK! Start Speaking!";
};


recognition.onresult = function(event) {
  // console.log(event);
  
  const current = event.resultIndex;
  
  
  const transcript = event.results[current][0].transcript;
  console.log(transcript);
  content.textContent = transcript;
  
  ReadOutLoud(transcript);
};


// event listener to voice button

button.addEventListener("click", () => {
  recognition.start();
});

// event listener to kbd button
kbdButton.addEventListener("click", () => {
  text = kbdIn.value;
  ShowTranscriptOnly(text);
});

//output

function ReadOutLoud(message){
  
  const speech = new SpeechSynthesisUtterance();
  
  
  
  if(message.includes('how are you')){
    const finalText = 
      greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
    response.textContent = finalText;
  }

  
  else if (message.includes('what is your name')) {
    const finalText =
      smallTalk[Math.floor(Math.random() * smallTalk.length)];
    speech.text = finalText;
    response.textContent = finalText;
    
  }
  
  else if (message.includes('I am Nikhil')) {
     const finalText = "Oh, Hello Nikhhil! How are you?";
     speech.text = finalText;
    response.textContent =  "Oh, Hello Nikhil! How are you?";
     
  }
  
  else if (message.includes('wish')) {
    const finalText = message;
    speech.text = finalText;
    response.textContent = finalText;
  
  }
  
  // else{response.textContent = "Didn't catch that, sorry!";} //default fallback
  
  
  
  
  speech.volume = 1;
  speech.rate = 1.0;
  speech.pitch = 1.2;
  
  window.speechSynthesis.speak(speech);
  
}

function ShowTranscriptOnly(message){
  
  if(message.includes('How are you')){
    const finalText = 
      greetings[Math.floor(Math.random() * greetings.length)];
    response.textContent = finalText;
  }

  
  else if (message.includes('What is your name')) {
    const finalText =
      smallTalk[Math.floor(Math.random() * smallTalk.length)];
    response.textContent = finalText;
    
  }
  
  else if (message.includes('I am Nikhil')) {
     const finalText = "Oh, Hello Nikhil! How are you?";
    response.textContent =  finalText;
     
  }
  
  
}