import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppFloatingButton() {
  return (
    <a
      aria-label="Agendar avaliação pelo WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition hover:scale-105"
      href={whatsappUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      <MessageCircle aria-hidden className="h-7 w-7" />
    </a>
  );
}
