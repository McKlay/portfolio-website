import axios from "axios";

const BACKEND_URL =
  import.meta.env.DEV
    ? "http://127.0.0.1:8000/chat" // ✅ local FastAPI server
    : "https://claybot-backend.onrender.com/chat"; // ✅ production Render server

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async handleUserMessage(message) {
    // Show simulated "typing..." message
    const loadingMsg = this.createChatBotMessage(
      <span className="typing">ClayBot is typing</span>
    );

    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, loadingMsg],
    }));

    try {
      const res = await axios.post(BACKEND_URL, { message });

      const botMessage = this.createChatBotMessage(res.data.response);

      // Simulate typing delay and replace typing msg
      setTimeout(() => {
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages.slice(0, -1), botMessage],
        }));
      }, 1500);
    } catch (error) {
      const botMessage = this.createChatBotMessage(
        "Sorry, I couldn't reach ClayBot right now."
      );
      setTimeout(() => {
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages.slice(0, -1), botMessage],
        }));
      }, 1500);
    }
  }
}

export default ActionProvider;
