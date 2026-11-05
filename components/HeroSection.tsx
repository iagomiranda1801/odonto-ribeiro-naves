import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { dentists, whatsappUrl } from "@/lib/site";

type HeroSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  imageCaption?: string;
  imageWidth?: number;
  imageHeight?: number;
  portrait?: boolean;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  compact?: boolean;
};

export function HeroSection({
  eyebrow,
  title,
  description,
  image = "/images/sorriso-editorial-azul.webp",
  imageAlt = "Retrato ilustrativo de uma pessoa adulta com sorriso natural",
  imageCaption = "Imagem ilustrativa.",
  imageWidth = 1536,
  imageHeight = 1024,
  portrait = false,
  primaryLabel = "Agendar pelo WhatsApp",
  secondaryLabel = "Conhecer tratamentos",
  secondaryHref = "/#servicos",
  compact = false
}: HeroSectionProps) {
  return (
    <section className="border-b border-brand-100 bg-[linear-gradient(115deg,#ffffff_25%,#f0f7fc_100%)]">
      <div className="container-padded grid items-center gap-8 py-9 sm:py-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 lg:py-16">
        <div>
          <p className="eyebrow inline-flex items-center gap-2"><span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-500" />{eyebrow}</p>
          <h1 className={`mt-5 max-w-3xl text-balance font-sans font-bold leading-[1.12] text-navy-950 ${compact ? "text-[2.25rem] sm:text-5xl lg:text-[3.35rem]" : "text-4xl sm:text-[2.75rem] lg:text-5xl"}`}>
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">{description}</p>
          <div className={`${compact ? "mt-6" : "mt-8"} flex flex-col gap-3 sm:flex-row sm:flex-wrap`}>
            <a
              className="btn-primary"
              href={whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle aria-hidden className="h-5 w-5 shrink-0" />
              {primaryLabel}
            </a>
            <Link
              className="btn-secondary"
              href={secondaryHref}
            >
              <ArrowRight aria-hidden className="h-5 w-5" />
              {secondaryLabel}
            </Link>
          </div>
          {compact ? (
            <div className="mt-6 border-t border-brand-100 pt-4 text-xs leading-6 text-slate-500">
              <p className="font-semibold text-navy-900">Profissionais responsáveis</p>
              {dentists.map((dentist) => (
                <p key={dentist.registry}>{dentist.name} · {dentist.registry}</p>
              ))}
            </div>
          ) : null}
        </div>
        <figure className={`relative min-w-0 self-center ${portrait ? "mx-auto w-full max-w-[320px] sm:max-w-[340px] lg:max-w-[350px]" : ""}`}>
          <Image
            alt={imageAlt}
            className="h-auto w-full rounded-3xl bg-brand-50 object-contain shadow-soft"
            height={imageHeight}
            priority
            sizes={portrait ? "(min-width: 1024px) 350px, (min-width: 640px) 340px, (min-width: 360px) 320px, calc(100vw - 40px)" : "(min-width: 1240px) 600px, (min-width: 1024px) 50vw, calc(100vw - 40px)"}
            src={image}
            width={imageWidth}
          />
          <figcaption className="mt-3 text-xs leading-5 text-slate-500">{imageCaption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
