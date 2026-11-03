import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
  linkLabel: string;
};

export function ServiceCard({ title, description, href, image, linkLabel }: ServiceCardProps) {
  return (
    <article className="surface-card flex min-w-0 flex-col p-4 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft sm:p-5">
      <Image
        alt={`Ilustração 3D de ${title.toLowerCase()}`}
        className="h-auto w-full rounded-xl bg-brand-50 object-contain"
        height={1024}
        sizes="(min-width: 1240px) 240px, (min-width: 1024px) 25vw, (min-width: 768px) 50vw, calc(100vw - 74px)"
        src={image}
        width={1536}
      />
      <h3 className="mt-5 text-xl font-bold text-navy-950">{title}</h3>
      <p className="mb-5 mt-3 text-sm leading-7 text-slate-600">{description}</p>
      <Link className="focus-ring mt-auto inline-flex min-h-11 items-center gap-2 self-start rounded-lg text-sm font-bold text-brand-600 hover:text-brand-800" href={href}>
        {linkLabel}
        <ArrowRight aria-hidden className="h-4 w-4 shrink-0 text-brand-600" />
      </Link>
    </article>
  );
}
