const chat = document.querySelector("#chat");
const form = document.querySelector("#chatForm");
const messageInput = document.querySelector("#message");
const subject = document.querySelector("#subject");
const API_URL = "http://127.0.0.1:8000/api/chat";

function addMessage(text, role = "assistant") {
  const row = document.createElement("div");
  row.className = `message ${role}`;
  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = role === "user" ? "🙂" : "✦";
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  row.append(avatar, bubble);
  chat.appendChild(row);
  chat.scrollTop = chat.scrollHeight;
}

async function sendMessage(text) {
  addMessage(text, "user");
  const thinking = "Thinking...";
  addMessage(thinking, "assistant");
  const bubble = chat.lastElementChild.querySelector(".bubble");

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({message: text, subject: subject.value})
    });
    if (!response.ok) throw new Error("Backend error");
    const data = await response.json();
    bubble.textContent = data.reply;
  } catch (error) {
    bubble.textContent = "The backend is not connected yet. Start the Python server, then try again.";
    console.error(error);
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = messageInput.value.trim();
  if (!text) return;
  messageInput.value = "";
  sendMessage(text);
});

document.querySelectorAll("[data-prompt]").forEach(button => {
  button.addEventListener("click", () => sendMessage(button.dataset.prompt));
});

document.querySelector("#newChat").addEventListener("click", () => {
  chat.innerHTML = "";
  location.reload();
});

document.querySelector("#themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});
