import Link from "next/link";
import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { navItems, siteConfig, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-padded grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <p className="font-serif text-3xl font-bold">Odontologia Ribeiro Naves</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
            Clínica odontológica em Taguatinga, Brasília, com atendimento humanizado,
            planejamento criterioso e foco em tratamentos que unem saúde, função e estética.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-400">Mapa do site</p>
          <nav className="mt-4 grid gap-2 text-sm text-slate-300">
            {navItems.map((item) => (
              <Link className="focus-ring rounded transition hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-400">Contato</p>
          <ul className="mt-4 grid gap-3 text-sm text-slate-300">
            <li className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 h-5 w-5 text-gold-400" />
              {siteConfig.address.display}
            </li>
            <li className="flex gap-3">
              <Phone aria-hidden className="mt-0.5 h-5 w-5 text-gold-400" />
              <a className="focus-ring rounded" href={whatsappUrl} rel="noopener noreferrer" target="_blank">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden className="mt-0.5 h-5 w-5 text-gold-400" />
              <a className="focus-ring rounded" href={`mailto:${siteConfig.email}`}>
                {siteConfig.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock aria-hidden className="mt-0.5 h-5 w-5 text-gold-400" />
              Segunda a sexta, com horário agendado
            </li>
            <li className="flex gap-3">
              <Instagram aria-hidden className="mt-0.5 h-5 w-5 text-gold-400" />
              <a className="focus-ring rounded" href={siteConfig.social.instagram} rel="noopener noreferrer" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} Odontologia Ribeiro Naves. Todos os direitos reservados.
      </div>
    </footer>
  );
}
