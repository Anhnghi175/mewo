const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.querySelector('.chat-input input');
const chatButton = document.querySelector('.chat-input button');

// Replace this with your actual chatbot logic
function getChatbotResponse(message) {
  return `Noi dung tra loi code o day`
}

function addMessageToChat(message, isUser) {
  const messageElement = document.createElement('div');
  messageElement.classList.add(isUser ? 'user-message' : 'chatbot-message');
  messageElement.textContent = `User: ${message}`;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatButton.addEventListener('click', () => {
  const userMessage = chatInput.value.trim();
  if (userMessage) {
    addMessageToChat(userMessage, true);
    const chatbotResponse = getChatbotResponse(userMessage);
    addMessageToChat(chatbotResponse, false);
    chatInput.value = '';
  }
});

function sendMessage() {
  let input = document.getElementById("user-input");
  let message = input.value;
  if (message.trim() !== "") {
    let chatContainer = document.getElementById("chat-container");
    let newMessage = document.createElement("div");
    newMessage.className = "message";
    newMessage.textContent = message;
    if(chatContainer) {
      chatContainer.appendChild(newMessage);
      input.value = "";
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }
}

function handleEnterMsg() {
  let chatContainer = document.getElementById("chat-container");
  let input = document.getElementById("user-input");
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("btn-send").click();
    }
  })
}