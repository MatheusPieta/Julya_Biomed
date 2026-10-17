"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import { useReveal } from "@/hooks/use-reveal"
import { procedures } from "@/lib/site"
import { Badge } from "@/components/ui/badge"

export function ProductSection() {
  const sectionRef = useReveal()
  return (
    <section ref={sectionRef} id="procedimentos" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <p data-reveal className="text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">Da formação à prática</p>
          <ScrollBlurText text="Cuidado em cada detalhe" className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground text-balance mb-6 font-light" />
          <p data-reveal className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Conheça os procedimentos que fazem parte da minha experiência em estética e do meu percurso de aprendizado.</p>
        </div>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:overflow-visible -mx-6 px-6 lg:mx-0 lg:px-0 pb-6 lg:pb-0">
          {procedures.map((procedure, index) => (
            <article key={procedure.name} data-reveal style={{ animationDelay: index * 0.15 + "s" }} className="group min-w-[82vw] sm:min-w-[65vw] lg:min-w-0 snap-center">
              <div className="bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-500 h-full flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted shrink-0">
                  <Image src={procedure.image} alt={procedure.alt} fill sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 50vw, 82vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <Badge variant="secondary" className="procedure-badge absolute top-4 left-4">{procedure.tag}</Badge>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-foreground mb-3 text-2xl font-normal">{procedure.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{procedure.description}</p>
                  <details className="procedure-details group/details">
                    <summary className="inline-flex gap-2 items-center text-sm font-medium text-primary cursor-pointer list-none py-2 focus-visible:outline-2 focus-visible:outline-primary rounded">Sobre o procedimento <ArrowRight aria-hidden="true" className="size-4 transition-transform group-open/details:rotate-90" /></summary>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-3">{procedure.detail}</p>
                  </details>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div data-reveal className="mt-12 border-t border-border pt-9 grid sm:grid-cols-2 gap-8">
          <div><h3 className="font-serif text-2xl text-foreground mb-2">Microagulhamento</h3><p className="text-muted-foreground leading-relaxed">Uma experiência que conecta a prática em estética ao interesse pela pesquisa. Foi tema do meu TCC, em um estudo com duas participantes sobre sua associação ao PDRN no rejuvenescimento cutâneo.</p></div>
          <div><h3 className="font-serif text-2xl text-foreground mb-2">Eletroterapia</h3><p className="text-muted-foreground leading-relaxed">Experiência com recursos de eletroterapia aplicados aos cuidados estéticos faciais e corporais.</p></div>
        </div>
      </div>
    </section>
  )
}
