import localFont from "next/font/local";
// import { Footer, Navbar } from "@/components";
import { NextUIProvider } from "@nextui-org/react";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import "./globals.css";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../components/layouts/navbar/Navbar"));
const Footer = dynamic(() => import("../components/layouts/footer/Footer"));

export const metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

// Clear Sans
const clearSans = localFont({
  src: [
    {
      path: "../fonts/clear-sans/ClearSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/clear-sans/ClearSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/clear-sans/ClearSans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/clear-sans/ClearSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-clear-sans",
});

// Barlow Condensed
const barlowCondensed = localFont({
  src: [
    {
      path: "../fonts/barlow_condensed/BarlowCondensed-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/barlow_condensed/BarlowCondensed-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/barlow_condensed/BarlowCondensed-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/barlow_condensed/BarlowCondensed-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/barlow_condensed/BarlowCondensed-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/barlow_condensed/BarlowCondensed-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/barlow_condensed/BarlowCondensed-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/barlow_condensed/BarlowCondensed-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-barlow-condensed",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TGTH - Team Global Talent Hub",
    url: "https://tgth.com.au/",
    logo: "https://tgth.com.au/_next/image?url=%2Flogo.webp&w=384&q=75",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+61863262000",
      contactType: "customer service",
      areaServed: "AU",
      availableLanguage: "en",
    },
    sameAs: [
      "https://facebook.com/profile.php?id=61566103990076",
      "https://www.linkedin.com/company/teamglobaltalenthub/",
      "https://www.instagram.com/teamglobaltalenthub/",
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="kJKyFPIozKLels7tu6FzPCIFkK8J8cdAKWgshjytYjQ"
        />
        <meta name="robots" content="noarchive" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          rel="stylesheet"
        />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-LT1MSVRXS0"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LT1MSVRXS0');
            `}
        </Script>
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonData) }}
        />
      </head>
      <body
        className={`${clearSans.variable} ${barlowCondensed.variable} antialiased`}
      >
        <NextTopLoader color="#1f3f99" showSpinner={false} />
        <NextUIProvider>
          <Navbar />
          <main className="overflow-x-hidden">{children}</main>
          <Footer />
        </NextUIProvider>
        <Toaster richColors position="top-center" />
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="beforeInteractive"
          // strategy="lazyOnload"
        />
        {/* Bit Assist - Floating call and contact form widget */}
        <Script id="bit-assist-config" strategy="afterInteractive">
          {`
            var bit_assist_={ api: {"base":"https://prothomtech.com/wp-json/bit-assist/v1","separator":"?"}};
            (function () { var s=document.createElement('script'); s.type='text/javascript'; s.async=true; s.src='https://prothomtech.com/wp-content/plugins/bit-assist/iframe/bit-assist.js'; t=document.getElementsByTagName('script')[0]; t.parentNode.insertBefore(s, t) })()
          `}
        </Script>
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-4ZSRYDYR8Q"></script>  */}
        {/* <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-4ZSRYDYR8Q'); </script> */}
      </body>
    </html>
  );
}

// layout metadata
// export const metadata = {
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       noimageindex: true,
//     },
//   },
// }
// robots disable webp
// -> Disallow: /*.webp$
// nextconfit updated
// images: {
//   disableStaticImages: true,
// },
