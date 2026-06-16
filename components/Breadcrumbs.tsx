import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import type { BreadcrumbItem } from "@/lib/site";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="container-padded py-5 text-sm">
      <ol className="flex flex-wrap items-center gap-2 text-slate-600">
        <li>
          <Link className="focus-ring inline-flex items-center gap-1 rounded" href="/">
            <Home aria-hidden className="h-4 w-4" />
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li className="flex items-center gap-2" key={item.href}>
            <ChevronRight aria-hidden className="h-4 w-4 text-gold-500" />
            <Link className="focus-ring rounded" href={item.href}>
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
