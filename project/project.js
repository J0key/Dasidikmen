// Navigation logic
document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const room = button.getAttribute('data-room');
            window.location.href = `chatbot.html?room=${room}`;
        });
    });
});

// Chatbot logic
document.addEventListener('DOMContentLoaded', (event) => {
    const chatbot = document.getElementById('chatbot');
    const closeChatbot = document.getElementById('close-chatbot');
    const chatContent = document.getElementById('chat-content');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    const params = new URLSearchParams(window.location.search);
    const room = params.get('room');
    const storageKey = `chat_${room}`;

    // Load chat history
    loadChatHistory();

    function sendMessage() {
        const userMessage = chatInput.value.trim();
        if (userMessage !== "") {
            addChatBubble(userMessage, 'user');
            chatInput.value = '';
            saveChatHistory(userMessage, 'user');
            // Simulate bot response after a short delay
            setTimeout(() => {
                const botMessage = 'This is a response from the bot.';
                addChatBubble(botMessage, 'bot');
                saveChatHistory(botMessage, 'bot');
            }, 1000);
        }
    }

    function addChatBubble(message, sender) {
        const bubble = document.createElement('div');
        bubble.classList.add('chat-bubble', sender);
        bubble.textContent = message;
        chatContent.appendChild(bubble);
        chatContent.scrollTop = chatContent.scrollHeight;
    }

    function saveChatHistory(message, sender) {
        let chatHistory = JSON.parse(localStorage.getItem(storageKey)) || [];
        chatHistory.push({ message, sender });
        localStorage.setItem(storageKey, JSON.stringify(chatHistory));
    }

    function loadChatHistory() {
        let chatHistory = JSON.parse(localStorage.getItem(storageKey)) || [];
        chatHistory.forEach(chat => {
            addChatBubble(chat.message, chat.sender);
        });
    }

    sendBtn.addEventListener('click', sendMessage);

    chatInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default action (form submission)
            sendMessage();
        }
    });

    closeChatbot.addEventListener('click', () => {
        history.back(); // Navigate to the previous page
    });
});
