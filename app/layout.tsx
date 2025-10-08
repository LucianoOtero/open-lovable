import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Imediato Soluções em Seguros',
  description: 'Corretora de Seguros de Auto',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Meta Tags Custom do Webflow */}
        <link rel="canonical" href="https://www.segurosimediato.com.br/" />
        <meta name="google-site-verification" content="7ExRewM8GII1bwZ73ZEBX9euCX9Sx5m8243ITCyx7cM" />
        <meta name="google-site-verification" content="OGCWNwHYOwmFiCvqJXojZvKRTGrh2P9hlXzrcKAeAao" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, maximum-scale=1" />
        <meta name="apple-mobile-web-app-title" content="Imediato Solucoes em Seguros" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="keywords" content="seguro de auto, seguro de carro, seguro de automovel, seguro de veiculo, seguro de uber, seguro de taxi, seguro de utilitario, seguro de moto, seguro de frotas, seguro auto, seguro carro, seguro automovel, seguro veiculo, seguro uber, seguro taxi, seguro utilitario, seguro moto, seguro frotas" />
        <meta name="author" content="Luciano Rodrigues Otero, lrotero@gmail.com" />
        <meta name="owner" content="Luciano Rodrigues Otero, lrotero@gmail.com" />
        <meta name="designer" content="Luciano Rodrigues Otero, lrotero@gmail.com" />
        <meta name="url" content="https://www.segurosimediato.com.br" />
        <meta name="identifier-URL" content="https://www.segurosimediato.com.br" />
        <meta name="reply-to" content="lrotero@gmail.com" />
        <meta name="subject" content="Corretora de Seguros de Auto" />
        <meta name="copyright" content="Imediato Solucoes em Seguros" />
        <meta name="Classification" content="Negocios, Seguros" />
        <meta name="theme-color" content="#108fce" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#108fce" />
        <meta name="msapplication-navbutton-color" content="#108fce" />

        {/* GTM Script */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PD6J398');`
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        {/* Noscript GTM */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PD6J398"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        {/* Libs do Footer */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.16/jquery.mask.min.js" strategy="afterInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.22.4/dist/sweetalert2.all.min.js" strategy="lazyOnload" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/sweetalert2@11.22.4/dist/sweetalert2.min.css" />
      </body>
    </html>
  );
}