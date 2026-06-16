"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { navItems, siteConfig, whatsappUrl } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="container-padded flex min-h-20 items-center justify-between gap-4">
        <Link className="focus-ring rounded" href="/" onClick={() => setOpen(false)}>
          <span className="block font-serif text-2xl font-bold text-navy-950">
            Ribeiro Naves
          </span>
          <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-gold-500">
            Odontologia
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-700 lg:flex">
          {navItems.slice(1).map((item) => (
            <Link className="focus-ring rounded transition hover:text-navy-900" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          className="focus-ring hidden items-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-800 md:inline-flex"
          href={whatsappUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Phone aria-hidden className="h-4 w-4" />
          Agendar
        </a>

        <button
          aria-expanded={open}
          aria-label="Abrir menu"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-navy-900 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="container-padded grid gap-1 py-4">
            {navItems.map((item) => (
              <Link
                className="focus-ring rounded px-2 py-3 text-base font-medium text-slate-700"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 text-sm font-semibold text-white"
              href={whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Phone aria-hidden className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
