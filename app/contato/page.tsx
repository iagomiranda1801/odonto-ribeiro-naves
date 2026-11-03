import type { Metadata } from "next";
import { ArrowUpRight, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { directionsUrl, siteConfig, whatsappUrl } from "@/lib/site";

const breadcrumbs = [{ name: "Contato", href: "/contato" }];

export const metadata: Metadata = buildMetadata({
  title: "Contato | Dentista em Taguatinga - Odontologia Ribeiro Naves",
  description:
    "Agende sua avaliação odontológica em Taguatinga Norte. Fale com a Odontologia Ribeiro Naves pelo WhatsApp, telefone ou Instagram.",
  path: "/contato"
});

export default function ContactPage() {
  return (
    <>
      <SEOJsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />
      <section className="bg-porcelain py-16">
        <div className="container-padded">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600">Contato</p>
          <h1 className="mt-4 max-w-3xl font-sans text-4xl font-bold leading-tight text-navy-950 lg:text-5xl">
            Agende sua avaliação odontológica em Taguatinga
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Fale com a equipe da Odontologia Ribeiro Naves para entender horários, tirar dúvidas
            iniciais e marcar sua consulta com tranquilidade.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: MessageCircle, title: "WhatsApp", text: siteConfig.phoneDisplay, href: whatsappUrl },
              { icon: Phone, title: "Telefone fixo", text: siteConfig.landlineDisplay, href: `tel:${siteConfig.landlineRaw}` },
              { icon: Instagram, title: "Instagram", text: "@odontoribeironaves", href: siteConfig.social.instagram },
              { icon: MapPin, title: "Endereço", text: siteConfig.address.display, href: directionsUrl },
              { icon: MapPin, title: "Acesso", text: siteConfig.address.access, href: "#como-chegar" }
            ].map((item) => (
              <a className="focus-ring rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:shadow-soft" href={item.href} key={item.title} rel={item.href.startsWith("https://") ? "noopener noreferrer" : undefined} target={item.href.startsWith("https://") ? "_blank" : undefined}>
                <item.icon aria-hidden className="h-8 w-8 text-brand-600" />
                <h2 className="mt-5 text-xl font-bold text-navy-950">{item.title}</h2>
                <p className="mt-2 break-words text-sm leading-6 text-slate-700">{item.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="scroll-mt-24 bg-white py-16" id="como-chegar">
        <div className="container-padded rounded-lg border border-slate-200 p-6 md:p-8">
          <h2 className="font-sans text-3xl font-bold text-navy-950">Como chegar</h2>
          <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-50 p-6 text-navy-950 sm:p-8">
            <p className="max-w-xl text-2xl font-bold">
              Clínica em Taguatinga, com acesso facilitado para pacientes de Brasília e regiões próximas.
            </p>
            <p className="mt-4 leading-7 text-slate-600">
              {siteConfig.address.display}. A entrada da clínica é pela lateral.
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
