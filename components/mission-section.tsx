"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { site } from "@/lib/site"

export function MissionSection() {
  const sectionRef = useReveal()
  return (
    <section ref={sectionRef} id="sobre" className="py-24 lg:py-28 px-4 md:px-6">
      <div className="relative max-w-7xl mx-auto rounded-[32px] md:rounded-[48px] overflow-hidden bg-foreground">
        <div className="absolute inset-0 lg:right-[40%]">
          <Image src="/images/julya/formacao-pratica.webp" alt="Vivência prática de Julya durante sua formação em estética" fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover object-[center_60%]" />
        </div>
        <div className="absolute inset-0 about-shade" />
        <div className="relative px-7 sm:px-10 lg:px-14 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div aria-hidden="true" className="hidden lg:block" />
            <div>
              <p data-reveal className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-4">Muito prazer</p>
              <h2 data-reveal className="font-serif text-4xl md:text-5xl font-medium text-background text-balance mb-8">Sou a Julya.<br />Estética com<br />olhar humano.</h2>
              <div data-reveal className="flex flex-col gap-5 text-background/85 leading-relaxed">
                <p>Me chamo Julya Caroline Ferreira. Sou biomédica pela FURB, com habilitação em análises clínicas, e encontrei na estética um caminho para unir conhecimento e cuidado.</p>
                <p>Minha formação técnica pelo NES me proporcionou experiências em estética facial e corporal. Hoje, sigo ampliando esse percurso na pós-graduação em Saúde Estética pelo IOA.</p>
                <p>Acredito em um cuidado que começa com atenção e se constrói com estudo, sensibilidade e respeito à individualidade de cada pessoa.</p>
              </div>
              <div data-reveal className="mt-10"><Button asChild size="lg" variant="secondary" className="about-button rounded-full px-8 h-12 group"><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">Vamos conversar <ArrowUpRight data-icon="inline-end" className="group-hover:translate-x-0.5 transition-transform" /></a></Button></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
