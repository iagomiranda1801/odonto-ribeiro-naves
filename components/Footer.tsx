import Link from "next/link";
import Image from "next/image";
import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import { dentists, navItems, siteConfig, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-porcelain text-navy-950">
      <div className="container-padded grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-4">
            <Image
              alt="Logotipo da Odontologia Ribeiro Naves"
              className="h-20 w-20"
              height={240}
              src="/images/logo-ribeiro-naves.svg"
              width={240}
            />
            <p className="font-sans text-2xl font-bold">Odontologia Ribeiro Naves</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-600">
            Clínica odontológica em Taguatinga, Brasília, com atendimento humanizado,
            planejamento criterioso e foco em tratamentos que unem saúde, função e estética.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">Mapa do site</p>
          <nav className="mt-4 grid gap-2 text-sm text-slate-600">
            {navItems.map((item) => (
              <Link className="focus-ring rounded transition hover:text-brand-600" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-600">Contato</p>
          <ul className="mt-4 grid gap-3 text-sm text-slate-600">
            {dentists.map((dentist) => (
              <li className="flex gap-3" key={dentist.registry}>
                <Phone aria-hidden className="mt-0.5 h-5 w-5 text-brand-600" />
                <span>
                  {dentist.name} - {dentist.registry}
                </span>
              </li>
            ))}
            <li className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 h-5 w-5 text-brand-600" />
              {siteConfig.address.display}
            </li>
            {siteConfig.landlines.map((phone) => (
              <li className="flex gap-3" key={phone.raw}>
                <Phone aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                <a className="focus-ring rounded" href={`tel:${phone.raw}`}>
                  {phone.display}
                </a>
              </li>
            ))}
            <li className="flex gap-3">
              <Phone aria-hidden className="mt-0.5 h-5 w-5 text-brand-600" />
              <a className="focus-ring rounded" href={whatsappUrl} rel="noopener noreferrer" target="_blank">
                WhatsApp: {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock aria-hidden className="mt-0.5 h-5 w-5 text-brand-600" />
              {siteConfig.address.access} - atendimento com horário agendado
            </li>
            <li className="flex gap-3">
              <Instagram aria-hidden className="mt-0.5 h-5 w-5 text-brand-600" />
              <a className="focus-ring rounded" href={siteConfig.social.instagram} rel="noopener noreferrer" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-5 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Odontologia Ribeiro Naves. Todos os direitos reservados.
      </div>
    </footer>
  );
}
