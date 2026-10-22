"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowRight, Pause, Play } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import { useReveal } from "@/hooks/use-reveal"
import { additionalProcedures, procedures } from "@/lib/site"
import { Badge } from "@/components/ui/badge"

const procedureCarouselClassName = "flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:overflow-visible -mx-6 px-6 lg:mx-0 lg:px-0 pb-6 lg:pb-0"
const loopingAdditionalProcedures = [...additionalProcedures, ...additionalProcedures]

export function ProductSection() {
  const sectionRef = useReveal()
  const [isMarqueePaused, setIsMarqueePaused] = useState(false)
  return (
    <section ref={sectionRef} id="procedimentos" className="py-24 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <p data-reveal className="text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">Da formação à prática</p>
          <ScrollBlurText text="Cuidado em cada detalhe" className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground text-balance mb-6 font-light" />
          <p data-reveal className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">Conheça alguns dos procedimentos que fazem parte da minha experiência em estética e do meu percurso de aprendizado.</p>
        </div>
        <div data-reveal className={procedureCarouselClassName}>
          {procedures.map((procedure) => (
            <article key={procedure.name} className="group min-w-[80vw] sm:min-w-[65vw] lg:min-w-0 snap-center">
              <div className="bg-card rounded-3xl overflow-hidden border border-border/50 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-500 h-full flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted shrink-0">
                  <Image src={procedure.image} alt={procedure.alt} fill sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 50vw, (min-width: 640px) 65vw, 80vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <Badge variant="secondary" className="procedure-badge absolute top-4 left-4">{procedure.tag}</Badge>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif text-foreground mb-3 text-[22px] min-[360px]:text-2xl font-normal">{procedure.name}</h3>
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
        <div data-reveal className="mt-12 border-t border-border pt-9">
          <div className="mb-7 lg:flex lg:items-start lg:justify-between lg:gap-6">
            <div>
              <h3 id="outras-experiencias" className="font-serif text-2xl md:text-3xl text-foreground mb-3">Outras experiências na estética</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">Além dos registros apresentados, minha experiência também inclui:</p>
            </div>
            <button type="button" aria-label={isMarqueePaused ? "Retomar rolagem automática" : "Pausar rolagem automática"} aria-pressed={isMarqueePaused} onClick={() => setIsMarqueePaused((paused) => !paused)} className="experience-pause hidden lg:inline-flex items-center gap-2 shrink-0 rounded-full border border-primary/20 bg-card px-4 py-2 text-sm text-primary hover:bg-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              {isMarqueePaused ? <Play aria-hidden="true" className="size-3.5" /> : <Pause aria-hidden="true" className="size-3.5" />}
              {isMarqueePaused ? "Continuar" : "Pausar"}
            </button>
          </div>
          <div className="experience-carousel -mx-6 lg:mx-0" data-paused={isMarqueePaused ? "true" : "false"}>
            <ul aria-label="Outras experiências em estética" tabIndex={0} className="experience-track flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-6 lg:px-0 pb-6 rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
              {loopingAdditionalProcedures.map((procedure, index) => {
                const isCopy = index >= additionalProcedures.length
                return (
                  <li key={`${procedure.name}-${isCopy ? "copy" : "original"}`} aria-hidden={isCopy ? true : undefined} className={`w-[80vw] shrink-0 sm:w-[65vw] lg:min-w-0 snap-center rounded-3xl border border-border/50 bg-card p-6 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10 transition-shadow duration-500 flex flex-col ${isCopy ? "experience-card-copy" : ""}`}>
                    <p className="text-xs leading-4 min-h-8 uppercase tracking-[0.12em] text-secondary font-medium mb-3">{procedure.tag}</p>
                    <h4 className="font-serif text-[22px] min-[360px]:text-2xl leading-8 min-h-16 text-foreground mb-3">{procedure.name}</h4>
                    <p className="text-muted-foreground leading-relaxed">{procedure.description}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
