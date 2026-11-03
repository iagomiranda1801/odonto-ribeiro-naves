import type { FaqItem } from "@/lib/site";

type FAQSectionProps = {
  title?: string;
  items: FaqItem[];
};

export function FAQSection({ title = "Perguntas frequentes", items }: FAQSectionProps) {
  return (
    <section className="bg-porcelain py-16">
      <div className="container-padded">
        <h2 className="font-sans text-3xl font-bold text-navy-950">{title}</h2>
        <div className="mt-8 grid gap-4">
          {items.map((item) => (
            <details className="group rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm" key={item.question}>
              <summary className="cursor-pointer list-none text-lg font-bold text-navy-950">
                <span className="inline-flex w-full items-center justify-between gap-4">
                  {item.question}
                  <span className="text-2xl font-light text-brand-600 group-open:rotate-45">+</span>
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
