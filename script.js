async function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  try {
    const res = await fetch(
      "https://TEN-BACKEND.onrender.com/chat",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      }
    );

    const data = await res.json();
    addMessage(data.reply, "bot");
  } catch (e) {
    addMessage("Lỗi kết nối backend", "bot");
    console.error(e);
  }
}

function addMessage(text, role) {
  const div = document.createElement("div");
  div.className = `message ${role}`;
  div.textContent = text;
  document.getElementById("messages").appendChild(div);
}
