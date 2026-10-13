import Link from "next/link";
import Image from "next/image";
import cosmicLogo from "@/assets/images/novapunk-cosmic-logo.webp";
import { navigation } from "@/config/navigation";

const Footer = () => (
  <footer className="lg:px-7.5 md:px-5 px-4 mt-auto bg-black text-white">
    <div className="container border-default-800">
      <div className="flex flex-wrap lg:flex-nowrap items-center justify-between">
        <Link href="/" className="block shrink-0 p-4 sm:p-5 lg:p-6.5">
          <Image src={cosmicLogo} alt="NovaPunk AI — cosmic supernova logo" className="w-[200px] max-[359px]:w-[170px] h-auto" unoptimized loading="eager" />
        </Link>
        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-1 px-4 pb-4 lg:pb-0">
          {navigation.map(({ href, label }) => <Link key={href} href={href} className="px-3 py-5 uppercase text-sm transition-colors hover:text-blue-300">{label}</Link>)}
        </nav>
      </div>
      <div className="flex flex-wrap justify-between gap-3 border-t border-default-800 px-4 sm:px-5 lg:px-6.5 py-4 text-sm text-default-300">
        <p>© {new Date().getFullYear()} NovaPunk LLC</p>
        <a href="mailto:sean@novapunkai.com" className="hover:text-white">sean@novapunkai.com</a>
      </div>
    </div>
  </footer>
);
export default Footer;

