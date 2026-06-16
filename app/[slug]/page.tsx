import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { HeroSection } from "@/components/HeroSection";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/${service.slug}`,
    image: service.image
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [{ name: service.shortTitle, href: `/${service.slug}` }];

  return (
    <>
      <SEOJsonLd data={[faqSchema(service.faqs), breadcrumbSchema(breadcrumbs)]} />
      <HeroSection
        description={service.description}
        eyebrow={service.eyebrow}
        image={service.image}
        secondaryHref="/contato"
        secondaryLabel="Ver localizacao"
        title={service.h1}
      />
      <Breadcrumbs items={breadcrumbs} />

      <section className="bg-white py-16">
        <div className="container-padded grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-500">{service.keywords}</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy-950">
              Tratamento indicado com critério, transparência e foco no seu resultado
            </h2>
            <p className="mt-5 leading-8 text-slate-700">
              Na Odontologia Ribeiro Naves, cada avaliação considera histórico de saúde, exames,
              expectativas e rotina do paciente. O objetivo é propor um plano possível, bem explicado
              e com acompanhamento próximo em Taguatinga, Brasília.
            </p>
            <div className="mt-8 grid gap-4">
              {service.benefits.map((benefit) => (
                <div className="flex gap-3 rounded-lg border border-slate-200 bg-porcelain p-4" key={benefit}>
                  <CheckCircle2 aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  <p className="text-sm leading-6 text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <Image
            alt={`${service.shortTitle} na Odontologia Ribeiro Naves`}
            className="rounded-[24px] shadow-soft"
            height={620}
            src={service.image}
            width={900}
          />
        </div>
      </section>

      <section className="bg-porcelain py-16">
        <div className="container-padded">
          <h2 className="font-serif text-3xl font-bold text-navy-950">Como funciona o atendimento</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {service.process.map((step, index) => (
              <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm" key={step}>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <p className="mt-4 text-sm leading-7 text-slate-700">{step}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={service.faqs} title={`FAQ sobre ${service.shortTitle.toLowerCase()}`} />
      <CTASection
        title={`Agende uma avaliação para ${service.shortTitle.toLowerCase()} em Taguatinga`}
        text="Receba uma orientação personalizada e entenda as possibilidades para o seu caso antes de iniciar qualquer tratamento."
      />
    </>
  );
}
