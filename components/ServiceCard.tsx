import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export function ServiceCard({ title, description, href, image }: ServiceCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <Image alt="" className="aspect-[16/10] w-full rounded-md object-cover" height={620} src={image} width={900} />
      <h3 className="mt-5 text-xl font-bold text-navy-950">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      <Link className="focus-ring mt-5 inline-flex items-center gap-2 rounded text-sm font-bold text-navy-900" href={href}>
        Saiba mais
        <ArrowRight aria-hidden className="h-4 w-4 text-gold-500" />
      </Link>
    </article>
  );
}
