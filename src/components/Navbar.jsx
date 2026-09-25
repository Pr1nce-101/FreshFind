import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Leaf, MessageCircle, Send, X } from "lucide-react";
import pic1 from "../images/logo.png";
import pic2 from "../images/logo-text.png";
import "../styles/fresh.css";
import "../styles/FarmChat.css";
import farmChatData from "../data/farmChatbot.json";
import { produceData } from "../data/produceData";

const normalizeText = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

function getChatAnswer(question) {
  const normalizedQuestion = normalizeText(question);
  const questionWords = normalizedQuestion.split(" ");
  const genericProduceWords = [
    "organic",
    "crisp",
    "wild",
    "creamy",
    "fresh",
    "sweet",
    "cool",
  ];
  const produce = produceData.find((item) =>
    normalizeText(item.name)
      .split(" ")
      .some(
        (word) =>
          word.length > 3 &&
          !genericProduceWords.includes(word) &&
          questionWords.some(
            (questionWord) =>
              questionWord.length > 3 &&
              (questionWord.startsWith(word.slice(0, 5)) ||
                word.startsWith(questionWord.slice(0, 5))),
          ),
      ),
  );
  const asksAvailability =
    /\b(available|availability|stock|today|currently|have|selling)\b/.test(
      normalizedQuestion,
    );

  if (asksAvailability) {
    if (produce && !produce.inStock) {
      return `${produce.name} is currently marked out of season in the FreshFind catalog. Its listed peak season is ${produce.peakSeasonRange}. Check with the linked market before visiting, as availability can change.`;
    }
    if (produce) {
      const markets = produce.linkedMarkets
        .map((market) => market.name)
        .join(", ");
      return `${produce.name} is currently listed as in stock at ${markets}. Availability can change, so please confirm with the market before visiting.`;
    }
    const available = produceData
      .filter((item) => item.inStock)
      .map((item) => item.name);
    return available.length
      ? `The catalog currently lists these as in stock: ${available.join(", ")}. Listings may change; contact a market to confirm today's availability.`
      : "The catalog doesn't currently list any produce as in stock. Please check with a market for the latest updates.";
  }

  if (produce) {
    if (/\b(season|when|harvest)\b/.test(normalizedQuestion)) {
      return `${produce.name} has a listed peak season of ${produce.peakSeasonRange}. FreshFind marks it ${produce.inStock ? "in stock" : "out of season"} right now.`;
    }
    if (
      /\b(nutrition|nutrients|calories|vitamin|fiber|fibre)\b/.test(
        normalizedQuestion,
      )
    ) {
      const facts = produce.nutritionalFacts
        .map((fact) => `${fact.label}: ${fact.value}`)
        .join(", ");
      return `${produce.name} nutrition listed in the guide: ${facts}.`;
    }
    return `${produce.briefDescription} Peak season: ${produce.peakSeasonRange}. It is currently marked ${produce.inStock ? "in stock" : "out of season"} in the catalog.`;
  }

  const matchingFaq = farmChatData.faqs
    .flatMap((faq) =>
      faq.keywords.map((keyword) => ({ faq, keyword: normalizeText(keyword) })),
    )
    .filter(({ keyword }) => normalizedQuestion.includes(keyword))
    .sort((first, second) => second.keyword.length - first.keyword.length)[0];
  return matchingFaq?.faq.answer ?? farmChatData.fallback;
}

function Navbar() {
  const navigate = useNavigate();
  const [chatOpen, setChatOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, sender: "bot", text: farmChatData.welcome },
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, chatOpen]);

  function sendQuestion(text = question) {
    const trimmedQuestion = text.trim();
    if (!trimmedQuestion) return;
    setMessages((currentMessages) => {
      const messageId = currentMessages.length + 1;
      return [
        ...currentMessages,
        { id: messageId, sender: "user", text: trimmedQuestion },
        {
          id: messageId + 1,
          sender: "bot",
          text: getChatAnswer(trimmedQuestion),
        },
      ];
    });
    setQuestion("");
  }

  return (
    <>
      <nav>
        <div className="nav-items">
          <div className="FF-logo">
            <img src={pic1} alt="FreshFind-logo" className="logo1" />
            <img src={pic2} alt="FreshFind-logo-text" className="logo2" />
          </div>

          <ul className="nav-links" style={{ listStyleType: "none" }}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/markets">Find a Market</NavLink>
            </li>
            <li>
              <NavLink to="/directory">Directory</NavLink>
            </li>
            <li>
              <NavLink to="/produce">Produce Guide</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>

          <div className="nav-actions">
            <button
              type="button"
              className="farm-chat-trigger"
              onClick={() => setChatOpen((isOpen) => !isOpen)}
              aria-expanded={chatOpen}
              aria-controls="farm-chat-panel"
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>Ask FreshFind</span>
            </button>
            <button onClick={() => navigate("/login")} className="btn-login">
              <b>Login/Register</b>
            </button>
          </div>
        </div>
      </nav>

      {chatOpen && (
        <section
          className="farm-chat-panel"
          id="farm-chat-panel"
          aria-label="FreshFind market assistant"
        >
          <header className="farm-chat-header">
            <div className="farm-chat-brand">
              <span className="farm-chat-mark">
                <Leaf size={19} aria-hidden="true" />
              </span>
              <div>
                <strong>FreshFind assistant</strong>
                <span>Farmers market help</span>
              </div>
            </div>
            <button
              className="farm-chat-close"
              type="button"
              onClick={() => setChatOpen(false)}
              aria-label="Close chat"
            >
              <X size={19} aria-hidden="true" />
            </button>
          </header>

          <div className="farm-chat-messages" aria-live="polite">
            {messages.map((message) => (
              <div
                className={`farm-chat-message ${message.sender}`}
                key={message.id}
              >
                {message.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {messages.length === 1 && (
            <div
              className="farm-chat-suggestions"
              aria-label="Suggested questions"
            >
              {farmChatData.suggestions.map((suggestion) => (
                <button
                  type="button"
                  key={suggestion}
                  onClick={() => sendQuestion(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          <form
            className="farm-chat-form"
            onSubmit={(event) => {
              event.preventDefault();
              sendQuestion();
            }}
          >
            <input
              aria-label="Ask a farmers market question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="Ask about produce or markets..."
            />
            <button
              type="submit"
              aria-label="Send question"
              disabled={!question.trim()}
            >
              <Send size={17} aria-hidden="true" />
            </button>
          </form>
        </section>
      )}
    </>
  );
}

export default Navbar;
