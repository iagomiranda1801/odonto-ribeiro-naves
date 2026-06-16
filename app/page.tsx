import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Award, HeartHandshake, MapPin, Smile } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { HeroSection } from "@/components/HeroSection";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { services, siteConfig, testimonials } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Odontologia Ribeiro Naves | Dentista em Taguatinga, Brasília",
  description:
    "Clínica odontológica em Taguatinga, Brasília, com mais de 40 anos de história, implantes, lentes dentais, alinhadores invisíveis e clareamento dental.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <SEOJsonLd data={breadcrumbSchema([])} />
      <HeroSection
        description="A Odontologia Ribeiro Naves une experiência, planejamento criterioso e atendimento humanizado para cuidar do seu sorriso em Taguatinga, Brasília."
        eyebrow="Clínica odontológica em Taguatinga"
        title="Dentista em Taguatinga para transformar saúde, função e estética do seu sorriso"
      />
      <Breadcrumbs items={[]} />

      <section className="bg-white py-12">
        <div className="container-padded grid gap-4 md:grid-cols-3">
          {[
            { icon: Award, value: "+40 anos", label: "de experiência odontológica" },
            { icon: Smile, value: "Milhares", label: "de pacientes atendidos" },
            { icon: HeartHandshake, value: "Atendimento", label: "humanizado do início ao fim" }
          ].map((item) => (
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={item.value}>
              <item.icon aria-hidden className="h-8 w-8 text-gold-500" />
              <p className="mt-4 text-3xl font-bold text-navy-950">{item.value}</p>
              <p className="mt-1 text-sm text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-porcelain py-16" id="servicos">
        <div className="container-padded">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-500">Tratamentos</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy-950">
              Odontologia planejada para pacientes de Taguatinga e Brasília
            </h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                description={service.description}
                href={`/${service.slug}`}
                image={service.image}
                key={service.slug}
                title={service.shortTitle}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-padded grid items-center gap-10 lg:grid-cols-2">
          <Image
            alt="Ambiente da Odontologia Ribeiro Naves em Taguatinga"
            className="rounded-[24px] shadow-soft"
            height={980}
            src="/images/hero-clinica.svg"
            width={1400}
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-500">Sobre a clínica</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-navy-950">
              Uma história construída com cuidado, precisão e relação de confiança
            </h2>
            <p className="mt-5 leading-8 text-slate-700">
              A Ribeiro Naves atende pacientes em Taguatinga com uma odontologia que valoriza diagnóstico,
              escuta e previsibilidade. Cada plano é pensado para equilibrar saúde bucal, estética natural
              e conforto ao longo do tratamento.
            </p>
            <Link className="focus-ring mt-6 inline-flex rounded-full border border-gold-500 px-6 py-3 text-sm font-bold text-navy-900" href="/sobre-a-clinica">
              Conhecer a Ribeiro Naves
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-porcelain py-16">
        <div className="container-padded">
          <h2 className="font-serif text-3xl font-bold text-navy-950">Avaliacoes de pacientes</h2>
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
            <MapPin aria-hidden className="h-9 w-9 text-gold-500" />
            <h2 className="mt-4 font-serif text-3xl font-bold text-navy-950">
              Localização em Taguatinga, Brasília
            </h2>
            <p className="mt-4 leading-7 text-slate-700">
              Atendimento em Taguatinga para pacientes que buscam uma clínica odontológica premium,
              acessível e preparada para tratamentos estéticos e reabilitadores.
            </p>
            <p className="mt-4 font-semibold text-navy-900">{siteConfig.address.display}</p>
          </div>
          <div className="min-h-72 rounded-md bg-[linear-gradient(135deg,#0B1F35,#174263)] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-400">Google Maps</p>
            <p className="mt-20 max-w-md text-2xl font-bold">
              Fácil acesso para pacientes de Taguatinga, Águas Claras, Ceilândia e Plano Piloto.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
