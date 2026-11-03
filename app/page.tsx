import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Award, CalendarCheck, ClipboardCheck, HeartHandshake, MapPin, MessageCircle } from "lucide-react";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { dentists, directionsUrl, services, siteConfig, testimonials, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Odontologia Ribeiro Naves | Dentista em Taguatinga, Brasília",
  description:
    "Clínica odontológica em Taguatinga, Brasília, com 33 anos de experiência, implantes, lentes dentais, alinhadores invisíveis e clareamento dental.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <SEOJsonLd data={breadcrumbSchema([])} />
      <HeroSection
        compact
        description="Implantes, lentes dentais, alinhadores e clareamento com planejamento individual e acompanhamento próximo."
        eyebrow="Odontologia em Taguatinga Norte"
        primaryLabel="Agendar pelo WhatsApp"
        title="Há 33 anos cuidando de sorrisos em Taguatinga."
      />

      <section aria-label="Diferenciais da clínica" className="border-b border-slate-200 bg-white py-6 sm:py-8">
        <div className="container-padded grid gap-5 sm:grid-cols-3 sm:gap-6">
          {[
            { icon: Award, value: "33 anos", label: "de experiência odontológica" },
            { icon: MapPin, value: "Taguatinga Norte", label: "QND 01 · entrada lateral" },
            { icon: HeartHandshake, value: "Atendimento", label: "humanizado do início ao fim" }
          ].map((item) => (
            <div className="flex items-center gap-4" key={item.value}>
              <item.icon aria-hidden className="h-7 w-7 shrink-0 text-brand-600" />
              <div>
                <p className="text-lg font-bold text-navy-950">{item.value}</p>
                <p className="mt-1 text-sm text-slate-600">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="scroll-mt-24 bg-porcelain py-12 sm:py-16" id="servicos">
        <div className="container-padded">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600">Tratamentos</p>
            <h2 className="mt-3 font-sans text-3xl font-bold text-navy-950">
              Encontre o cuidado que seu sorriso precisa
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                description={service.summary}
                href={`/${service.slug}`}
                image={service.image}
                key={service.slug}
                linkLabel={service.linkLabel}
                title={service.shortTitle}
              />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="avaliacao-title" className="bg-white py-12 sm:py-16">
        <div className="container-padded">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600">Primeira consulta</p>
          <h2 className="mt-3 font-sans text-3xl font-bold text-navy-950" id="avaliacao-title">
            Como funciona sua avaliação
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">
            Do primeiro contato ao plano de tratamento, entenda cada etapa para agendar com tranquilidade.
          </p>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              { icon: MessageCircle, title: "Converse com a equipe", text: "Entre em contato pelo WhatsApp para tirar dúvidas iniciais e consultar os horários disponíveis." },
              { icon: CalendarCheck, title: "Agende sua consulta", text: "Combine um horário para sua avaliação presencial na clínica, em Taguatinga Norte." },
              { icon: ClipboardCheck, title: "Conheça seu plano", text: "O dentista avalia suas necessidades e orienta um plano individual, com exames quando necessários." }
            ].map((step, index) => (
              <li className="rounded-xl border border-slate-200 bg-porcelain p-6" key={step.title}>
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">{index + 1}</span>
                  <step.icon aria-hidden className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
          <a className="btn-primary mt-8" href={whatsappUrl} rel="noopener noreferrer" target="_blank">
            <MessageCircle aria-hidden className="h-5 w-5" />
            Agendar pelo WhatsApp
          </a>
        </div>
      </section>

      <section className="bg-brand-50 py-12 sm:py-20">
        <div className="container-padded grid items-center gap-10 lg:grid-cols-2">
          <figure className="min-w-0">
            <Image
              alt="Composição ilustrativa com modelo dentário e espelho odontológico sobre uma bandeja"
              className="h-auto w-full rounded-[24px] shadow-soft"
              height={1024}
              sizes="(min-width: 1152px) 540px, (min-width: 1024px) 50vw, calc(100vw - 32px)"
              src="/images/cuidado-odontologico-azul.webp"
              width={1536}
            />
            <figcaption className="mt-3 text-xs leading-5 text-slate-500">
              Imagem ilustrativa.
            </figcaption>
          </figure>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600">Sobre a clínica</p>
            <h2 className="mt-3 font-sans text-3xl font-bold text-navy-950">
              Uma história construída com cuidado, precisão e relação de confiança
            </h2>
            <p className="mt-5 leading-8 text-slate-700">
              A Ribeiro Naves atende pacientes em Taguatinga com uma odontologia que valoriza diagnóstico,
              escuta e previsibilidade. Cada plano é pensado para equilibrar saúde bucal, estética natural
              e conforto ao longo do tratamento.
            </p>
            <div className="mt-5 grid gap-2 text-sm font-semibold text-navy-900">
              {dentists.map((dentist) => (
                <p key={dentist.registry}>
                  {dentist.name} - {dentist.registry}
                </p>
              ))}
            </div>
            <Link className="btn-secondary mt-6" href="/sobre-a-clinica">
              Conhecer a Ribeiro Naves
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-porcelain py-16">
        <div className="container-padded">
          <h2 className="font-sans text-3xl font-bold text-navy-950">Avaliações de pacientes</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-padded grid gap-8 rounded-lg border border-slate-200 p-6 md:grid-cols-[1fr_1.1fr] md:p-8">
          <div>
            <MapPin aria-hidden className="h-9 w-9 text-brand-600" />
            <h2 className="mt-4 font-sans text-3xl font-bold text-navy-950">
              Localização em Taguatinga, Brasília
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Atendimento em Taguatinga para pacientes que buscam uma clínica odontológica premium,
              acessível e preparada para tratamentos estéticos e reabilitadores.
            </p>
            <p className="mt-4 font-semibold text-navy-900">{siteConfig.address.display}</p>
            <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-navy-900">
              <MapPin aria-hidden className="h-5 w-5 shrink-0 text-brand-600" />
              {siteConfig.address.access} · sala 05, 1º andar
            </p>
          </div>
          <div className="flex flex-col items-start justify-center rounded-2xl border border-brand-100 bg-brand-50 p-6 text-navy-950 sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">Sua visita</p>
            <h3 className="mt-4 text-2xl font-bold">Trace sua rota até a clínica</h3>
            <p className="mt-3 max-w-md leading-7 text-slate-600">
              Abra o endereço no Google Maps e escolha o melhor trajeto. Ao chegar, procure a entrada lateral.
            </p>
            <a className="btn-primary mt-6" href={directionsUrl} rel="noopener noreferrer" target="_blank">
              Como chegar
              <ArrowUpRight aria-hidden className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
