import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyAudTxhLiz8UuYnKSCqSg4OxSOw5NSm_dM",
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}
export default function ChatBot() {
  main();
  return (
    <form className="sticky bottom-0 right-0" action="">
      <input type="text" />
      <button>Send</button>
    </form>
  );
}
