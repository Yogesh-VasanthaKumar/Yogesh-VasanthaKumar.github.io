const contentContainer = document.querySelector("main");
const voiceSelect = document.getElementById("voices");
const textInput = document.getElementById("text");
const speakButton = document.getElementById("read");
const toggleButton = document.getElementById("toggle");
const closeButton = document.getElementById("close");

const textContainer = document.getElementById("text-box");

const speechData = [
  {
    image: "drink",
    text: "I'm Thirsty",
  },
  {
    image: "food",
    text: "I'm Hungry",
  },
  {
    image: "tired",
    text: "I'm Tired",
  },
  {
    image: "hurt",
    text: "I'm Hurt",
  },
  {
    image: "happy",
    text: "I'm Happy",
  },
  {
    image: "angry",
    text: "I'm Angry",
  },
  {
    image: "sad",
    text: "I'm Sad",
  },
  {
    image: "scared",
    text: "I'm Scared",
  },
  {
    image: "outside",
    text: "I Want To Go Outside",
  },
  {
    image: "home",
    text: "I Want To Go Home",
  },
  {
    image: "school",
    text: "I Want To Go To School",
  },
  {
    image: "grandma",
    text: "I Want To Go To Grandmas",
  },
];

function createContentBox(item) {
  const contentBox = document.createElement("div");
  const { image, text } = item;
  contentBox.classList.add("content-box");
  contentBox.innerHTML = `
    <img src='https://github.com/bradtraversy/vanillawebprojects/blob/master/speech-text-reader/img/${image}.jpg?raw=true' alt="${text}"/>
    <p class="info">${text}</p>
    `;
  contentBox.addEventListener("click", () => handleSpeech(text, contentBox));
  contentContainer.appendChild(contentBox);
}

speechData.forEach(createContentBox);

let availableVoices = [];

function loadAvailableVoices() {
  availableVoices = speechSynthesis.getVoices();
  availableVoices.forEach((voice) => {
    const option = document.createElement("option");
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;
    voiceSelect.appendChild(option);
  });
}

function handleSpeech(text, contentBox) {
  setTextMessage(text);
  speakText();
  contentBox.classList.add("active");
  setTimeout(() => contentBox.classList.remove("active"), 800);
}

const speechMessage = new SpeechSynthesisUtterance();

function setTextMessage(text) {
  speechMessage.text = text;
}

function speakText() {
  speechSynthesis.speak(speechMessage);
}

function setChosenVoice(e) {
  speechMessage.voice = availableVoices.find((voice) => voice.name === e.target.value);
}


textContainer.classList.add("hidden");


toggleButton.addEventListener("click", () => {
  textContainer.classList.toggle("show");
});


closeButton.addEventListener("click", () => {
  textContainer.classList.remove("show");
});

speechSynthesis.addEventListener("voiceschanged", loadAvailableVoices);

voiceSelect.addEventListener("change", setChosenVoice);

speakButton.addEventListener("click", () => {
  setTextMessage(textInput.value);
  speakText();
});

loadAvailableVoices();
