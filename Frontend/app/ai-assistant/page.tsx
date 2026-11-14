import type { Metadata } from "next";
import VoiceControls from "@/components/voice-controls";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Assistant",
  description: "Ask questions and get decision support for your farm.",
};

export default function AIAssistantPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm font-medium text-leaf">Intelligent decision support</p>
        <h2 className="mt-1 text-2xl font-bold">Ask your farm assistant</h2>
        <p className="mt-2 text-sm muted">
          Type or speak a question to get guidance based on your farm profile and Earth observation data.
        </p>
      </div>
      <div className="card p-5 md:p-6">
        <div className="mb-4 flex items-center gap-2">
          <div className="rounded-xl bg-mint p-2 text-leaf">
            <MessageCircle size={19} />
          </div>
          <div>
            <h3 className="font-bold">Voice & Text Assistant</h3>
            <p className="text-xs muted">Supported languages: English, Nepali, Hindi</p>
          </div>
        </div>
        <VoiceControls />
      </div>
    </div>
  );
}
