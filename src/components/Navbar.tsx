"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logoLight from "@/assets/images/logo-light.svg";
import { navigation } from "@/config/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="lg:px-7.5 md:px-5 px-4 fixed inset-x-0 top-0 z-90 bg-white">
      <div className="container border-y-2 h-16 lg:h-20 flex items-center justify-between">
        <Link href="/" onClick={() => setMenuOpen(false)} className="relative flex shrink-0 items-center p-4 sm:p-5 lg:p-6.5 lg:border-e-2 border-default-100">
          <Image src={logoLight} alt="NovaPunk LLC" className="w-[200px] max-[359px]:w-[170px] h-auto" priority />
          <div className="decoration"><span className="decoration-top" /><span className="decoration-bottom" /></div>
        </Link>
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1 px-4">
          {navigation.map(({ href, label }) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}
              className={`px-3 py-5 uppercase text-sm transition-colors hover:text-primary ${pathname === href ? "text-primary" : "text-default-950"}`}>
              {label}
            </Link>
          ))}
        </nav>
        <button type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen} aria-controls="navbar-menu" onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden m-3 size-10 shrink-0 flex items-center justify-center bg-default-900 text-white text-2xl">
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>
      {menuOpen && (
        <nav id="navbar-menu" aria-label="Mobile navigation" className="container lg:hidden bg-white border-b-2 px-6 py-2 shadow-lg">
          {navigation.map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}
              aria-current={pathname === href ? "page" : undefined}
              className="block border-b border-default-100 last:border-0 py-4 text-default-950 hover:text-primary">
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;

