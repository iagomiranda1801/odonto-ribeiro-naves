import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { SEOJsonLd } from "@/components/SEOJsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { blogPosts, services } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

const postBodies: Record<string, string[]> = {
  "quando-procurar-implante-dentario-em-taguatinga": [
    "A perda de um dente afeta muito mais do que a estética. Ela pode alterar a mastigação, sobrecarregar outros dentes e comprometer a confiança ao sorrir. Por isso, procurar avaliação para implante dentário em Taguatinga é importante quando há ausência dental recente ou antiga.",
    "Na consulta, o dentista avalia gengiva, osso, mordida, exames de imagem e expectativas do paciente. Essa etapa evita indicações apressadas e ajuda a definir se o implante é o tratamento mais previsível para devolver função e naturalidade.",
    "Pacientes de Brasília que desejam recuperar segurança ao mastigar devem priorizar uma clínica que explique cada fase, desde o planejamento até a prótese final."
  ],
  "lentes-de-contato-dental-resultado-natural": [
    "O segredo de lentes de contato dental naturais está no planejamento. Cor, translucidez, formato e proporção precisam conversar com lábios, rosto, gengiva e personalidade do paciente.",
    "Um sorriso excessivamente branco ou padronizado pode envelhecer a face e chamar atenção pelo motivo errado. Por isso, a Odontologia Ribeiro Naves trabalha com uma abordagem estética criteriosa, buscando equilíbrio e elegância.",
    "Antes de iniciar o tratamento em Brasília, a avaliação mostra possibilidades, limites e cuidados para que o resultado seja bonito de perto, em fotos e no dia a dia."
  ],
  "alinhadores-invisiveis-rotina-brasilia": [
    "Alinhadores invisíveis são uma alternativa moderna para quem quer corrigir dentes sem o impacto estético do aparelho fixo. Eles podem combinar bem com uma rotina corrida porque são removíveis para alimentação e higiene.",
    "A previsibilidade depende de diagnóstico, planejamento digital e disciplina de uso. Em muitos casos, adultos em Brasília escolhem os alinhadores pela discrição em reuniões, atendimentos e eventos sociais.",
    "A melhor forma de saber se o tratamento é indicado é passar por uma avaliação ortodôntica, analisando mordida, alinhamento e objetivos do paciente."
  ]
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {};
  }

  return buildMetadata({
    title: `${post.title} | Odontologia Ribeiro Naves`,
    description: post.description,
    path: `/blog/${post.slug}`
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` }
  ];

  return (
    <>
      <SEOJsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />
      <article className="bg-white py-16">
        <div className="container-padded max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-gold-500">Blog Ribeiro Naves</p>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight text-navy-950 lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">{post.description}</p>
          <div className="mt-10 space-y-6 text-lg leading-9 text-slate-700">
            {postBodies[post.slug].map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 rounded-lg border border-slate-200 bg-porcelain p-6">
            <h2 className="text-2xl font-bold text-navy-950">Tratamentos relacionados</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {services.map((service) => (
                <a className="focus-ring rounded-full bg-white px-4 py-2 text-sm font-bold text-navy-900" href={`/${service.slug}`} key={service.slug}>
                  {service.shortTitle}
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>
      <CTASection />
    </>
  );
}
