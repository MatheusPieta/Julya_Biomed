import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Fraunces } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
})

export const metadata: Metadata = {
  title: "Julya Caroline Ferreira | Biomedicina e Estética em Blumenau",
  description:
    "Conheça Julya Caroline Ferreira: biomédica pela FURB, técnica em estética pelo NES e pós-graduanda em Saúde Estética pelo IOA, em Blumenau, SC.",
  openGraph: {
    title: "Julya Caroline Ferreira | Biomedicina e Estética",
    description: "A beleza de ser você, em cada detalhe. Conheça minha formação, experiência e pesquisa em estética.",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.variable} ${fraunces.variable} font-sans antialiased`}>
        <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
        {children}
      </body>
    </html>
  )
}
