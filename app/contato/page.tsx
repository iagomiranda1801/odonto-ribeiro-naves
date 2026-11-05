import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight, Download, Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
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
          <div className="grid items-center gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600">Contato</p>
              <h1 className="mt-4 max-w-3xl font-sans text-4xl font-bold leading-tight text-navy-950 lg:text-5xl">
                Agende sua avaliação odontológica em Taguatinga
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
                Fale com a equipe da Odontologia Ribeiro Naves para entender horários, tirar dúvidas
                iniciais e marcar sua consulta com tranquilidade.
              </p>
              <a className="btn-primary mt-6" href={whatsappUrl} rel="noopener noreferrer" target="_blank">
                <MessageCircle aria-hidden className="h-5 w-5" />
                Agendar pelo WhatsApp
              </a>
            </div>
            <figure className="mx-auto w-full max-w-[240px]">
              <Image
                alt="Retrato em preto e branco da Dra. Cíntia Ribeiro Naves, de blusa branca"
                className="h-auto w-full rounded-3xl shadow-soft"
                height={1280}
                width={853}
                sizes="(min-width: 280px) 240px, calc(100vw - 40px)"
                src="/images/equipe/dra-cintia-retrato-pb.webp"
              />
              <figcaption className="mt-3 text-xs leading-5 text-slate-500">Dra. Cíntia Ribeiro Naves</figcaption>
            </figure>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: MessageCircle, title: "WhatsApp", text: siteConfig.phoneDisplay, href: whatsappUrl },
              ...siteConfig.landlines.map((phone, index) => ({ icon: Phone, title: `Telefone fixo ${index + 1}`, text: phone.display, href: `tel:${phone.raw}` })),
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
      <section aria-labelledby="cartao-title" className="bg-white py-12 sm:py-16">
        <div className="container-padded grid items-center gap-10 rounded-3xl border border-brand-100 bg-brand-50 p-6 sm:p-10 md:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="eyebrow">Cartão de apresentação</p>
            <h2 className="mt-3 max-w-xl text-3xl font-bold text-navy-950" id="cartao-title">Os contatos da Dra. Cíntia sempre à mão</h2>
            <p className="mt-5 max-w-lg leading-8 text-slate-600">
              Conheça o cartão de apresentação da Dra. Cíntia Ribeiro Naves. Você pode abrir a imagem completa ou salvar o cartão no celular para consultar quando precisar.
            </p>
            <p className="mt-4 text-sm font-semibold text-brand-700">Cirurgiã-dentista · CRO-DF 3547</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a className="btn-primary" href="/images/equipe/cartao-dra-cintia-original.jpg" download="cartao-dra-cintia-ribeiro-naves.jpg">
                <Download aria-hidden className="h-5 w-5" />
                Salvar cartão
              </a>
              <a className="btn-secondary" href="/images/equipe/cartao-dra-cintia-original.jpg" target="_blank" rel="noopener noreferrer">
                Abrir cartão
                <ArrowUpRight aria-hidden className="h-5 w-5" />
              </a>
            </div>
          </div>
          <a className="focus-ring mx-auto block w-full max-w-[280px] rounded-2xl" href="/images/equipe/cartao-dra-cintia-original.jpg" target="_blank" rel="noopener noreferrer" aria-label="Abrir cartão de apresentação completo da Dra. Cíntia Ribeiro Naves">
            <Image
              alt="Cartão de apresentação da Dra. Cíntia Ribeiro Naves com contatos e endereço em Taguatinga"
              className="h-auto w-full rounded-2xl border border-white shadow-soft"
              src="/images/equipe/cartao-dra-cintia.webp"
              width={536}
              height={957}
              sizes="(min-width: 380px) 280px, calc(100vw - 88px)"
            />
          </a>
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
