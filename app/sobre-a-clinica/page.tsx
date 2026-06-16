import type { Metadata } from "next";
import Image from "next/image";
import { Award, HeartPulse, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { dentists } from "@/lib/site";

const breadcrumbs = [{ name: "Sobre a clínica", href: "/sobre-a-clinica" }];

export const metadata: Metadata = buildMetadata({
  title: "Sobre a Clínica | Odontologia Ribeiro Naves em Taguatinga",
  description:
    "Conheça a Odontologia Ribeiro Naves, clínica odontológica em Taguatinga com mais de 40 anos, atendimento humanizado e tratamentos planejados.",
  path: "/sobre-a-clinica"
});

export default function AboutPage() {
  return (
    <>
      <SEOJsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />
      <section className="bg-porcelain py-16">
        <div className="container-padded grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-500">Sobre a clínica</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-navy-950 lg:text-5xl">
              Odontologia Ribeiro Naves: tradição e cuidado premium em Taguatinga
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              A clínica nasceu com o compromisso de oferecer odontologia de alto nível em Brasília,
              preservando uma relação próxima com cada paciente. Mais do que realizar procedimentos,
              a equipe busca construir planos claros, confortáveis e sustentáveis para o sorriso.
            </p>
          </div>
          <Image
            alt="Estrutura da clínica Odontologia Ribeiro Naves"
            className="rounded-[24px] shadow-soft"
            height={980}
            priority
            src="/images/hero-clinica.svg"
            width={1400}
          />
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container-padded grid gap-6 md:grid-cols-3">
          {[
            { icon: Award, title: "+40 anos", text: "Experiência clínica aliada a protocolos atuais e diagnóstico cuidadoso." },
            { icon: ShieldCheck, title: "Planejamento", text: "Tratamentos indicados com transparência, previsibilidade e respeito ao tempo do paciente." },
            { icon: HeartPulse, title: "Humanização", text: "Escuta ativa, linguagem clara e acompanhamento em cada fase do tratamento." }
          ].map((item) => (
            <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={item.title}>
              <item.icon aria-hidden className="h-8 w-8 text-gold-500" />
              <h2 className="mt-5 text-2xl font-bold text-navy-950">{item.title}</h2>
              <p className="mt-3 leading-7 text-slate-700">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-porcelain py-16">
        <div className="container-padded">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-500">Equipe responsável</p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-navy-950">
            Cirurgiões-dentistas da Odontologia Ribeiro Naves
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {dentists.map((dentist) => (
              <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" key={dentist.registry}>
                <h3 className="text-2xl font-bold text-navy-950">{dentist.name}</h3>
                <p className="mt-2 font-semibold text-gold-500">{dentist.registry}</p>
                <p className="mt-4 leading-7 text-slate-700">
                  Atendimento odontológico com foco em diagnóstico, planejamento e cuidado próximo
                  em todas as etapas do tratamento.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
