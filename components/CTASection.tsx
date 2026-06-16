import { CalendarCheck } from "lucide-react";
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
    <section className="bg-navy-900 py-16 text-white">
      <div className="container-padded flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="font-serif text-3xl font-bold">{title}</h2>
          <p className="mt-3 max-w-2xl leading-7 text-slate-300">{text}</p>
        </div>
        <a
          className="focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-4 text-sm font-bold text-white transition hover:bg-gold-400"
          href={whatsappUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <CalendarCheck aria-hidden className="h-5 w-5" />
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}
