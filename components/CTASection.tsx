import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

type CTASectionProps = {
  title?: string;
  text?: string;
};

export function CTASection({
  title = "Agende sua avaliação em Taguatinga",
  text = "Converse com a equipe da Odontologia Ribeiro Naves e receba uma orientação clara sobre o melhor caminho para o seu sorriso."
}: CTASectionProps) {
  return (
    <section className="border-y border-brand-100 bg-brand-50 py-12 sm:py-16">
      <div className="container-padded flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <p className="eyebrow mb-3">Vamos conversar?</p>
          <h2 className="max-w-2xl font-sans text-3xl font-bold text-navy-950">{title}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">{text}</p>
        </div>
        <a
          className="btn-primary w-full shrink-0 sm:w-auto"
          href={whatsappUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <MessageCircle aria-hidden className="h-5 w-5" />
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
