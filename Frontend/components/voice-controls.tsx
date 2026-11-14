"use client";

import { useEffect, useRef, useState } from "react";
import { Mic, MicOff, Volume2, VolumeX, Trash2 } from "lucide-react";

// Small local types keep this component compatible with TypeScript projects
// whose DOM library does not yet include SpeechRecognition definitions.
type SpeechRecognitionResultLike = {
  0: { transcript: string };
  isFinal?: boolean;
};

type SpeechRecognitionEventLike = {
  results: ArrayLike<SpeechRecognitionResultLike>;
};

type SpeechRecognitionErrorLike = {
  error?: string;
};

type SpeechRecognitionLike = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: ((event: SpeechRecognitionErrorLike) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
  abort: () => void;
};

type SpeechWindow = Window & {
  SpeechRecognition?: new () => SpeechRecognitionLike;
  webkitSpeechRecognition?: new () => SpeechRecognitionLike;
};

const languageOptions = [
  { value: "en-US", label: "English" },
  { value: "ne-NP", label: "Nepali" },
  { value: "hi-IN", label: "Hindi" },
];

export default function VoiceControls() {
  const [message, setMessage] = useState("");
  const [language, setLanguage] = useState("en-US");
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [notice, setNotice] = useState(
    "Voice is optional. You can also type your question.",
  );
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);

  useEffect(() => {
    return () => {
      recognitionRef.current?.abort();
      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function startListening() {
    if (typeof window === "undefined") return;

    // Stop an earlier recognition session before starting another one.
    recognitionRef.current?.abort();

    const speechWindow = window as SpeechWindow;
    const Recognition =
      speechWindow.SpeechRecognition ??
      speechWindow.webkitSpeechRecognition;

    if (!Recognition) {
      setNotice(
        "Speech recognition is unavailable in this browser. Please type your question instead.",
      );
      return;
    }

    const recognition = new Recognition();
    recognition.lang = language;
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0]?.transcript ?? "")
        .join(" ")
        .trim();

      if (transcript) {
        setMessage((current) =>
          current.trim() ? `${current.trim()} ${transcript}` : transcript,
        );
        setNotice("Voice captured. Review or edit the text before using it.");
      } else {
        setNotice("No words were detected. Please try again or type instead.");
      }
    };

    recognition.onerror = (event) => {
      const messages: Record<string, string> = {
        "not-allowed":
          "Microphone permission was denied. Allow microphone access or type instead.",
        "service-not-allowed":
          "The browser blocked speech recognition. Please type instead.",
        "no-speech": "No speech was detected. Please try speaking again.",
        "audio-capture":
          "No working microphone was found. Check your device or type instead.",
        network:
          "Speech recognition could not connect. Check your internet connection.",
        aborted: "Voice input was stopped.",
      };

      setNotice(
        messages[event.error ?? ""] ??
          "Voice input failed. Please try again or type your question.",
      );
    };

    recognition.onend = () => {
      setListening(false);
      recognitionRef.current = null;
    };

    recognitionRef.current = recognition;
    setNotice("Listening… Speak clearly near your device microphone.");
    setListening(true);

    try {
      recognition.start();
    } catch {
      setListening(false);
      recognitionRef.current = null;
      setNotice("Could not start the microphone. Please try again.");
    }
  }

  function stopListening() {
    recognitionRef.current?.stop();
    setListening(false);
    setNotice("Voice input stopped.");
  }

  function readMessage() {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setNotice(
        "Text-to-speech is unavailable in this browser. You can read the text on screen.",
      );
      return;
    }

    if (!message.trim()) {
      setNotice("Type or speak a message first.");
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(message.trim());
    utterance.lang = language;
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => {
      setSpeaking(false);
      setNotice("The browser could not read this text aloud.");
    };

    window.speechSynthesis.speak(utterance);
    setNotice("Reading your text aloud.");
  }

  function stopSpeaking() {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setSpeaking(false);
    setNotice("Audio playback stopped.");
  }

  function clearMessage() {
    setMessage("");
    setNotice("Text cleared. You can speak or type a new question.");
  }

  return (
    <section
      className="mt-4 rounded-2xl border border-[#E4ECE6] bg-[#F8FBF8] p-4"
      aria-labelledby="voice-controls-title"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h4 id="voice-controls-title" className="font-semibold text-forest">
            Voice interaction
          </h4>
          <p className="mt-1 text-xs muted">
            Speak a question or listen to the text. Typing always remains available.
          </p>
        </div>

        <label className="text-xs font-medium text-forest">
          Voice language
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            disabled={listening || speaking}
            className="mt-1 block rounded-lg border border-[#DCE7DF] bg-white px-2 py-2 text-sm"
          >
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {listening ? (
          <button
            type="button"
            onClick={stopListening}
            className="inline-flex items-center gap-2 rounded-xl bg-red-700 px-3 py-2 text-sm text-white"
          >
            <MicOff size={16} />
            Stop listening
          </button>
        ) : (
          <button
            type="button"
            onClick={startListening}
            disabled={speaking}
            className="inline-flex items-center gap-2 rounded-xl bg-forest px-3 py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Mic size={16} />
            Speak
          </button>
        )}

        {speaking ? (
          <button
            type="button"
            onClick={stopSpeaking}
            className="inline-flex items-center gap-2 rounded-xl border border-[#DCE7DF] bg-white px-3 py-2 text-sm text-forest"
          >
            <VolumeX size={16} />
            Stop audio
          </button>
        ) : (
          <button
            type="button"
            onClick={readMessage}
            disabled={!message.trim() || listening}
            className="inline-flex items-center gap-2 rounded-xl border border-[#DCE7DF] bg-white px-3 py-2 text-sm text-forest disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Volume2 size={16} />
            Read aloud
          </button>
        )}

        <button
          type="button"
          onClick={clearMessage}
          disabled={!message}
          className="inline-flex items-center gap-2 rounded-xl border border-[#DCE7DF] bg-white px-3 py-2 text-sm text-forest disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Trash2 size={15} />
          Clear
        </button>
      </div>

      <label
        htmlFor="farm-voice-message"
        className="mt-3 block text-sm font-medium text-forest"
      >
        Your question or message
      </label>
      <textarea
        id="farm-voice-message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        rows={3}
        placeholder="For example: How can I improve soil health before planting rice?"
        className="mt-2 w-full resize-y rounded-xl border border-[#DCE7DF] bg-white px-3 py-3 text-sm outline-none focus:border-leaf"
      />

      <p className="mt-2 text-xs muted" role="status" aria-live="polite">
        {notice}
      </p>
      <p className="mt-2 text-[11px] muted">
        Browser support and available voices vary by device. Microphone access
        may require permission and a secure connection (HTTPS or localhost).
      </p>
    </section>
  );
}
