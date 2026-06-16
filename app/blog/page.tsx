import Link from "next/link";
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
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-500">Blog</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-navy-950 lg:text-5xl">
            Conteúdos para cuidar melhor do seu sorriso em Brasília
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
            Orientações claras sobre tratamentos odontológicos, estética do sorriso e decisões importantes antes de iniciar um plano em Taguatinga.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-soft" key={post.slug}>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <CalendarDays aria-hidden className="h-4 w-4 text-gold-500" />
                  {new Intl.DateTimeFormat("pt-BR", { dateStyle: "medium" }).format(new Date(`${post.date}T00:00:00`))}
                </div>
                <h2 className="mt-4 text-xl font-bold leading-snug text-navy-950">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-700">{post.description}</p>
                <Link className="focus-ring mt-5 inline-flex rounded text-sm font-bold text-navy-900" href={`/blog/${post.slug}`}>
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
