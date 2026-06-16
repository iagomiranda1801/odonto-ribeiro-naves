import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, whatsappUrl } from "@/lib/site";

const breadcrumbs = [{ name: "Contato", href: "/contato" }];

export const metadata: Metadata = buildMetadata({
  title: "Contato | Dentista em Taguatinga - Odontologia Ribeiro Naves",
  description:
    "Agende sua avaliação odontológica em Taguatinga, Brasília. Fale com a Odontologia Ribeiro Naves pelo WhatsApp, telefone ou e-mail.",
  path: "/contato"
});

export default function ContactPage() {
  return (
    <>
      <SEOJsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />
      <section className="bg-porcelain py-16">
        <div className="container-padded">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-500">Contato</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-navy-950 lg:text-5xl">
            Agende sua avaliação odontológica em Taguatinga
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Fale com a equipe da Odontologia Ribeiro Naves para entender horários, tirar dúvidas
            iniciais e marcar sua consulta com tranquilidade.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: MessageCircle, title: "WhatsApp", text: siteConfig.phoneDisplay, href: whatsappUrl },
              { icon: Phone, title: "Telefone", text: siteConfig.phoneDisplay, href: `tel:${siteConfig.phoneRaw}` },
              { icon: Mail, title: "E-mail", text: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: MapPin, title: "Endereço", text: siteConfig.address.display, href: "#" }
            ].map((item) => (
              <a className="focus-ring rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-soft" href={item.href} key={item.title}>
                <item.icon aria-hidden className="h-8 w-8 text-gold-500" />
                <h2 className="mt-5 text-xl font-bold text-navy-950">{item.title}</h2>
                <p className="mt-2 break-words text-sm leading-6 text-slate-700">{item.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container-padded rounded-lg border border-slate-200 p-6 md:p-8">
          <h2 className="font-serif text-3xl font-bold text-navy-950">Como chegar</h2>
          <div className="mt-6 min-h-80 rounded-md bg-[linear-gradient(135deg,#0B1F35,#174263)] p-6 text-white">
            <p className="max-w-xl text-2xl font-bold">
              Clínica em Taguatinga, com acesso facilitado para pacientes de Brasília e regiões próximas.
            </p>
            <p className="mt-4 text-slate-300">
              Endereço informado pela clínica: {siteConfig.address.display}.
            </p>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
