import type { Metadata } from "next";
import { Geist, Roboto } from "next/font/google";
import favicon from "@/assets/images/favicon.ico";
import '@/assets/css/style.css';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import AppProvidersWrapper from "@/components/wrappers/AppProvidersWrapper";
import { DEFAULT_PAGE_TITLE } from "@/config/constants";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${DEFAULT_PAGE_TITLE}`,
    default: DEFAULT_PAGE_TITLE,
  },
  icons: { icon: favicon.src },
  description:
    "Custom AI World Models for Real Work. NovaPunk LLC provides custom AI agents, workflow automation, predictive analytics, data engineering, and business simulation.",
  keywords: [
    "custom AI engineering",
    "AI agents",
    "AI world models",
    "data engineering",
    "predictive analytics",
  ],
  authors: [{ name: "NovaPunk LLC" }],
  robots: "index, follow",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
  lang="en"
  className={`${geist.variable} ${roboto.variable} h-full antialiased`}
  data-scroll-behavior="smooth"
  suppressHydrationWarning
  >
    
      <body>
        <AppProvidersWrapper>
          {children}
        </AppProvidersWrapper>
      </body>
    </html>
  );
};

export default RootLayout;

