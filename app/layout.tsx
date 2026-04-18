import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kaitor.com"),
  title: "Kaitor Software — Software a medida para empresas en España",
  description:
    "Automatizamos, integramos y construimos software a medida para empresas B2B y B2C en crecimiento. Diagnóstico gratuito · Precio cerrado · Sin permanencia. España.",
  keywords: [
    "software a medida",
    "automatización empresas",
    "integración sistemas",
    "desarrollo software B2B",
    "desarrollo software B2C",
    "automatización procesos España",
    "software personalizado empresas",
  ],
  authors: [{ name: "Kaitor Software" }],
  alternates: {
    canonical: "https://kaitor.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Kaitor Software — Software a medida para empresas",
    description:
      "Automatizamos, integramos y construimos software a medida para empresas B2B y B2C en crecimiento. Precio cerrado, sin permanencia.",
    type: "website",
    url: "https://kaitor.com",
    locale: "es_ES",
    siteName: "Kaitor Software",
    images: [
      {
        url: "/og-image.png",
        width: 1376,
        height: 768,
        alt: "Kaitor Software — Software a medida para empresas en España",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaitor Software — Software a medida para empresas",
    description:
      "Diagnóstico gratuito · Precio cerrado · Sin permanencia. Software a medida para empresas B2B y B2C.",
    images: ["/og-image.png"],
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kaitor Software",
  description:
    "Automatizamos, integramos y construimos software a medida para empresas B2B y B2C en España.",
  url: "https://kaitor.com",
  email: "hola@kaitor.com",
  areaServed: "ES",
  serviceType: [
    "Software a medida",
    "Automatización de procesos",
    "Integración de sistemas",
    "Inteligencia artificial aplicada",
  ],
  priceRange: "3000€–8000€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "4",
    bestRating: "5",
  },
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta un proyecto de software a medida?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio siempre es cerrado y lo tienes por escrito antes de empezar — sin sorpresas ni costes adicionales. El diagnóstico previo es siempre gratuito. Los proyectos suelen situarse entre 3.000€ y 8.000€ según el alcance.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tarda en estar listo el proyecto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del alcance, pero en menos de 3 días tenemos una propuesta. Para proyectos de automatización o integraciones sencillas, podemos entregar en 2–4 semanas. Para herramientas más complejas, entre 6 y 12 semanas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué pasa si no sé exactamente qué necesito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Es lo más normal. Por eso el primer paso es siempre una conversación — sin coste, sin compromiso. Tú nos cuentas qué está fallando en tu negocio y nosotros te decimos si podemos resolverlo y cómo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tenéis contratos de permanencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. El mantenimiento y la evolución posterior al proyecto funcionan mes a mes, sin permanencia. Puedes cancelar cuando quieras. Seguimos ahí porque aportamos valor, no porque tengas un contrato.",
      },
    },
    {
      "@type": "Question",
      name: "¿Trabajáis con empresas de cualquier sector?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trabajamos con empresas B2B y con empresas B2C medianas y grandes que tienen procesos manuales, herramientas desconectadas o necesitan una solución específica que no existe en el mercado. El sector no importa — importa el problema.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué tecnologías usáis para el desarrollo de software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las que mejor resuelven el problema — no las que están de moda. Backend, APIs, automatización, inteligencia artificial aplicada. No te vamos a aburrir con tecnicismos: solo te explicamos qué va a mejorar en tu negocio.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
