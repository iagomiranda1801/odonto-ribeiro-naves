import { Quote, Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  text: string;
  treatment: string;
};

export function TestimonialCard({ name, text, treatment }: TestimonialCardProps) {
  return (
    <figure className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <Quote aria-hidden className="h-8 w-8 text-gold-500" />
      <div className="mt-4 flex gap-1 text-gold-500" aria-label="Avaliação cinco estrelas">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star aria-hidden className="h-4 w-4 fill-current" key={index} />
        ))}
      </div>
      <blockquote className="mt-4 text-base leading-7 text-slate-700">&ldquo;{text}&rdquo;</blockquote>
      <figcaption className="mt-5">
        <p className="font-bold text-navy-950">{name}</p>
        <p className="text-sm text-slate-500">{treatment}</p>
      </figcaption>
    </figure>
  );
}
