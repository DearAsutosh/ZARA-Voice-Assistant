let button = document.querySelector(".talk");
console.log("Button:", button);
let content = document.querySelector(".content");
console.log("Content:", content);

window.addEventListener("contextmenu", (event) => {
    speak(" Right click Disabled !\n for Security Purposes ! ");
  alert(" Right click Disabled !\n for Security Purposes ! ");
});

function speak(text) {
  let text_speak = new SpeechSynthesisUtterance(text);
  text_speak.rate = 1;
  text_speak.volume = 1;
  text_speak.pitch = 1;

  window.speechSynthesis.speak(text_speak);
}

window.addEventListener("load", () => {
  speak("initialiazing zara...");
  wish();
});
function wish() {
  var day = new Date();
  var hour = day.getHours();

  if (hour >= 0 && hour < 11) {
    speak("Good Morning Boss...");
    speak("How may i help you ?");
  } else if (hour > 11 && hour < 16) {
    speak("Good Afternoon Boss...");
    speak("How may i help you ?");
  } else if (hour > 16 && hour < 20) {
    speak("Good evening boss...");
    speak("How may i help you ?");
  } else {
    speak("Good night Boss...");
    speak("How may i help you ?");
  }
}

let speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
  const currentIndex = event.resultIndex;
  const transcript = event.results[currentIndex][0].transcript;
  content.textContent = transcript;
  takeCommand(transcript.toLowerCase());
};

button.addEventListener("click", () => {
  content.textContent = "Listening...";
  recognition.start();
});

function takeCommand(message) {
  if (
    message.includes("hey") ||
    message.includes("hello") ||
    message.includes("hi")
  ) {
    speak("Hello Boss , How May I Help You?");
  } else if (message.includes("hello zara")) {
    wish();
    speak("How may  help you ?");
  } else if (message.includes("upload my details of instagram")) {
    speak("uploading boss");
    speak("ready boss");
  } else if (
    message.includes("who is asutosh") ||
    message.includes("who is ashutosh")
  ) {
    speak(
      "My Boss........My Cute Boss...... I love him... Here is his Instagram Account....You can talk with my Single Boss ...."
    );
    window.open("https://www.instagram.com/dear_asutosh/", "_blank");
  } else if (
    message.includes("who is satyajit") ||
    message.includes("who is satyajit choudhury") ||
    message.includes("who is satyajeet") ||
    message.includes("who is satyajeet chowdhury")
  ) {
    speak(
      "satyajit is one of the friend of my BOSS.satyajit is a most beautful girl .mostly He is a Randi "
    );
  } else if (message.includes("who is gitanjali")) {
    speak(
      "Gitanjali is a pretty Girl and her smile............... haaaye haaye ... She is one of the best friend of my Boss. Mostly she loves Ghuushuri ... here is her instagram account ... "
    );
    windows.open();
  } else if (message.includes("who is raja")) {
    speak("a friend of my boss");
  } else if (message.includes("who are you")) {
    window.open("https://github.com/DearAsutosh", "_blank");
    speak(
      "I am a voice assistant created by My boss Asutoosh Sahoo , currently an undergraduate student from BJB Autonomus College,Bhubaneshwar with a strong passion for programming. He worked hard to create me, and I'm here to assist you in your  daily tasks."
    );
  } else if (message.includes("open google")) {
    window.open("https://google.com", "_blank");
    speak("Opening Google...");
  } else if (message.includes("open youtube")) {
    window.open("https://youtube.com", "_blank");
    speak("Opening Youtube...");
  } else if (message.includes("open facebook")) {
    window.open("https://facebook.com", "_blank");
    speak("Opening Facebook...");
  } else if (message.includes("your owner")) {
    window.open("https://www.instagram.com/dear_asutosh/", "_blank");
    speak("Opening Instagram of Boss..... Asutosh Saahoo...");
  } else if (message.includes("owner") || message.includes("boss")) {
    speak(
      "My boss is Asutosh Saahoo , currently an undergraduate student from BJB Autonomus College,Bhubaneshwar with a strong passion for programming."
    );
    speak("Here is his instagram account...");
    window.open("https://www.instagram.com/dear_asutosh/", "_blank");
    speak(
      "He worked from few months to create me, and I'm here to assist you in your  daily tasks. !"
    );
  }

  // else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
  //     window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
  //     const finalText = "This is what I found on the internet regarding " + message;
  //     speak(finalText);
  // }
  else if (message.includes("wikipedia")) {
    window.open(
      `https://en.wikipedia.org/wiki/${message
        .replace("wikipedia", "")
        .trim()}`,
      "_blank"
    );
    const finalText = "This is what I found on Wikipedia regarding " + message;
    speak(finalText);
  } else if (message.includes("time")) {
    const time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    const finalText = "The current time is " + time;
    speak(finalText);
  } else if (message.includes("date")) {
    const date = new Date().toLocaleString(undefined, {
      month: "short",
      day: "numeric",
    });
    const finalText = "Today's date is " + date;
    speak(finalText);
  } else if (message.includes("calculator")) {
    window.open("Calculator:///");
    const finalText = "Opening Calculator";
    speak(finalText);
  } else {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "I found some information for " + message + " on Google";
    speak(finalText);
  }
}
