import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppFloatingButton() {
  return (
    <a
      aria-label="Agendar avaliação pelo WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#137A4A] px-4 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-[#10663E] sm:px-5"
      href={whatsappUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      <MessageCircle aria-hidden className="h-5 w-5" />
      <span>Agendar</span>
    </a>
  );
}
