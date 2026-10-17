"use client"

import { ScrollBlurText } from "@/components/scroll-blur-text"
import { useReveal } from "@/hooks/use-reveal"

const study = [
  { number: "01", title: "A pergunta", text: "Avaliar a eficácia do microagulhamento associado ao PDRN no rejuvenescimento cutâneo.", caption: "Tema do trabalho de conclusão de curso" },
  { number: "02", title: "A experiência", text: "Um estudo prático com duas participantes, aproximando o conhecimento adquirido em aula da vivência em estética.", caption: "Pesquisa acadêmica com duas participantes" },
  { number: "03", title: "O aprendizado", text: "Uma experiência com resultados observados positivos, que enriqueceu meu percurso e meu interesse pela área.", caption: "Relato da própria Julya sobre o estudo" },
]

export function TestimonialsSection() {
  const sectionRef = useReveal()
  return (
    <section ref={sectionRef} id="pesquisa" className="py-24 lg:py-32 bg-background overflow-hidden lg:pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14 lg:mb-16">
          <p data-reveal className="text-sm uppercase tracking-[0.2em] text-secondary font-medium mb-4">Pesquisa na minha trajetória</p>
          <ScrollBlurText text="Da curiosidade à experiência" className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground text-balance mb-6 font-light" />
          <p data-reveal className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">No meu TCC, explorei a associação entre microagulhamento e PDRN em um estudo prático sobre rejuvenescimento cutâneo.</p>
        </div>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 -mx-6 px-6 md:mx-0 md:px-0 pb-6">
          {study.map((item, index) => (
            <article key={item.number} data-reveal style={{ animationDelay: index * 0.15 + "s" }} className="min-w-[80vw] md:min-w-0 snap-center bg-card rounded-2xl p-6 lg:p-8 border border-border/50 shadow-lg shadow-primary/5 my-4 flex flex-col">
              <span className="text-sm text-secondary mb-6">{item.number}</span>
              <h3 className="font-serif text-2xl xl:text-3xl text-foreground mb-5">{item.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-8 flex-1">{item.text}</p>
              <p className="text-xs text-muted-foreground border-t border-border/50 pt-5 leading-relaxed">{item.caption}</p>
            </article>
          ))}
        </div>
        <p data-reveal className="text-center font-serif text-xl md:text-2xl text-primary max-w-3xl mx-auto mt-9 leading-relaxed">“Foi uma experiência muito enriquecedora na área.”<span className="block font-sans text-xs text-muted-foreground mt-4 tracking-wider uppercase">Julya Caroline Ferreira</span></p>
      </div>
    </section>
  )
}
