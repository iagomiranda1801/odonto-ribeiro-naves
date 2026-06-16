import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, MapPin } from "lucide-react";
import { whatsappUrl } from "@/lib/site";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function HeroSection({
  eyebrow,
  title,
  description,
  image = "/images/hero-clinica.svg",
  primaryLabel = "Agendar avaliação",
  secondaryLabel = "Conhecer tratamentos",
  secondaryHref = "/#servicos"
}: HeroSectionProps) {
  return (
    <section className="bg-gradient-to-b from-porcelain to-white">
      <div className="container-padded grid min-h-[calc(100vh-80px)] items-center gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-500">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-navy-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-4 text-sm font-bold text-white shadow-soft transition hover:bg-navy-800"
              href={whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <CalendarCheck aria-hidden className="h-5 w-5" />
              {primaryLabel}
            </a>
            <Link
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-navy-900 transition hover:border-gold-500"
              href={secondaryHref}
            >
              <MapPin aria-hidden className="h-5 w-5" />
              {secondaryLabel}
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            alt="Clínica odontológica premium em Taguatinga"
            className="h-auto w-full rounded-[28px] shadow-soft"
            height={980}
            priority
            src={image}
            width={1400}
          />
        </div>
      </div>
    </section>
  );
}
