import { Fraunces, Hanken_Grotesk, JetBrains_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import SmoothScroll from "@/components/providers/smooth-scroll";
import CustomCursor from "@/components/cursor/custom-cursor";
import SiteBackground from "@/components/layout/site-background";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-hanken",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains",
  display: "swap",
});
const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-pixelify",
  display: "swap",
});

const SITE_URL = "https://kaytarechiam.vercel.app";
const DESCRIPTION =
  "Kayta Rechia Mazaya - Information Systems & Technology student at ITB. Building across code, IoT hardware, and UI/UX design, with a track record in event leadership and research.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kayta Rechia Mazaya - IST ITB",
    template: "%s - Kayta Rechia Mazaya",
  },
  description: DESCRIPTION,
  keywords: [
    "Kayta Rechia Mazaya",
    "ITB",
    "Information Systems and Technology",
    "UI/UX Designer",
    "IoT",
    "portfolio",
    "Questify",
    "DASH",
  ],
  authors: [{ name: "Kayta Rechia Mazaya", url: "https://github.com/kaytarechiam" }],
  creator: "Kayta Rechia Mazaya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Kayta Rechia Mazaya - IST ITB",
    description: DESCRIPTION,
    siteName: "KAYTA.EXE",
    images: [{ url: "/images/foto-formal.jpg", width: 1200, height: 1200, alt: "Kayta Rechia Mazaya" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kayta Rechia Mazaya - IST ITB",
    description: DESCRIPTION,
    images: ["/images/foto-formal.jpg"],
  },
  icons: { icon: "/favicon.ico" },
  alternates: { canonical: SITE_URL },
};

export const viewport = {
  themeColor: "#17140F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`dark ${fraunces.variable} ${hanken.variable} ${jetbrains.variable} ${pixelify.variable}`}
      suppressHydrationWarning
    >
      <body>
        <SiteBackground />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
