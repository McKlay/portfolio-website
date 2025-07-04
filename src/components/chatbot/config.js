import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "ClayBot",
  initialMessages: [
    createChatBotMessage("Hi! I'm ClayBot. Ask me anything about Clay's portfolio."),
    createChatBotMessage("For example: 'What is HandDigitRecognizer Project?'"),
  ],
  customStyles: {
    botMessageBox: { backgroundColor: "#4f46e5" },
    chatButton: { backgroundColor: "#9333ea" },
  },
};

export default config;
