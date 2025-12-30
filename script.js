function sendMessage() {
    const input = document.getElementById("userInput");
    const messageText = input.value.trim();
    if (messageText === "") return;

    const messages = document.getElementById("messages");

    // User message
    const userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.textContent = messageText;
    messages.appendChild(userMsg);

    input.value = "";

    // Fake bot reply
    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "message bot";
        botMsg.textContent = "Tôi là bản demo giao diện ChatGPT.";
        messages.appendChild(botMsg);
        messages.scrollTop = messages.scrollHeight;
    }, 600);
}
