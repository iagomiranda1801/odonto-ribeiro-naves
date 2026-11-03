import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CalendarDays } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { blogPosts } from "@/lib/site";

const breadcrumbs = [{ name: "Blog", href: "/blog" }];

export const metadata: Metadata = buildMetadata({
  title: "Blog de Odontologia em Taguatinga | Ribeiro Naves",
  description:
    "Conteúdos sobre implantes, estética dental, alinhadores invisíveis e clareamento dental para pacientes de Taguatinga e Brasília.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <>
      <SEOJsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />
      <section className="bg-porcelain py-16">
        <div className="container-padded">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600">Blog</p>
          <h1 className="mt-4 max-w-3xl font-sans text-4xl font-bold leading-tight text-navy-950 lg:text-5xl">
            Conteúdos para cuidar melhor do seu sorriso em Brasília
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Orientações claras sobre tratamentos odontológicos, estética do sorriso e decisões importantes antes de iniciar um plano em Taguatinga.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article className="surface-card flex flex-col p-5 transition hover:border-brand-200 hover:shadow-soft" key={post.slug}>
                <Image alt={`Ilustração sobre ${post.title.toLowerCase()}`} className="mb-5 h-auto w-full rounded-xl" height={1024} width={1536} src={post.image} sizes="(min-width: 1240px) 344px, (min-width: 768px) 33vw, calc(100vw - 80px)" />
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CalendarDays aria-hidden className="h-4 w-4 text-brand-600" />
                  {new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" }).format(new Date(`${post.date}T00:00:00`))}
                </div>
                <h2 className="mt-4 text-xl font-bold leading-snug text-navy-950">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">{post.description}</p>
                <Link className="focus-ring mt-auto inline-flex min-h-11 items-center self-start rounded-lg pt-5 text-sm font-bold text-brand-600" href={`/blog/${post.slug}`}>
                  Ler artigo
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
