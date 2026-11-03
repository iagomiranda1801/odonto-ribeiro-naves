"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { navItems, siteConfig, whatsappUrl } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 text-navy-950 backdrop-blur">
      <div className="container-padded flex min-h-20 items-center justify-between gap-4">
        <Link className="focus-ring flex items-center gap-3 rounded" href="/" onClick={() => setOpen(false)}>
          <Image
            alt="Logotipo da Odontologia Ribeiro Naves"
            className="h-12 w-12 shrink-0 sm:h-14 sm:w-14"
            height={240}
            src="/images/logo-ribeiro-naves.svg"
            width={240}
          />
          <span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-600">
              Odontologia
            </span>
            <span className="mt-0.5 block font-sans text-lg font-extrabold tracking-tight text-navy-950 sm:text-xl">
              Ribeiro Naves
            </span>
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-4 text-[13px] font-semibold text-slate-600 lg:flex xl:gap-5">
          {navItems.slice(1).map((item) => (
            <Link className="focus-ring rounded transition hover:text-brand-600" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-3 lg:ml-0">
          <a
            className="btn-primary hidden shrink-0 rounded-full px-5 py-3 md:inline-flex"
            href={whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <MessageCircle aria-hidden className="h-4 w-4" />
            Agendar
          </a>

          <button
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-navy-900 lg:hidden"
            onClick={() => setOpen((value) => !value)}
            type="button"
          >
            {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="max-h-[calc(100svh-80px)] overflow-y-auto border-t border-slate-200 bg-white lg:hidden" id="mobile-navigation">
          <nav aria-label="Navegação mobile" className="container-padded grid gap-1 py-4">
            {navItems.map((item) => (
              <Link
                className="focus-ring rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-brand-50"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              className="btn-primary mt-2"
              href={whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle aria-hidden className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
