"use client"

import { GraduationCap, BookOpen, FlaskConical, Sparkles } from "lucide-react"
import { ScrollBlurText } from "@/components/scroll-blur-text"
import { useReveal } from "@/hooks/use-reveal"

const credentials = [
  { icon: GraduationCap, value: "FURB", label: "Graduação em Biomedicina" },
  { icon: BookOpen, value: "IOA", label: "Pós-graduação em andamento" },
  { icon: Sparkles, value: "NES", label: "Técnico em estética concluído" },
  { icon: FlaskConical, value: "TCC", label: "Vivência em pesquisa prática" },
]
const education = [
  { number: "01", title: "Biomedicina", description: "Formação pela Fundação Universidade Regional de Blumenau (FURB), com habilitação em análises clínicas." },
  { number: "02", title: "Saúde Estética", description: "Pós-graduação em andamento pelo Instituto Odontológico das Américas (IOA), aprofundando meu conhecimento na área estética." },
  { number: "03", title: "Técnico em estética", description: "Curso concluído no Núcleo de Estudos Sistêmicos (NES), com experiências práticas em estética facial e corporal." },
]

export function ScienceSection() {
  const sectionRef = useReveal()
  return (
    <section ref={sectionRef} id="formacao" className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 lg:mb-20">
          <p data-reveal className="text-sm uppercase tracking-[0.2em] text-primary-foreground/70 font-medium mb-4">Conhecimento que acompanha o cuidado</p>
          <ScrollBlurText text="Uma trajetória feita de ciência" className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground text-balance mb-6 font-light" />
          <p data-reveal className="text-lg text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">Da base biomédica à formação em estética, cada etapa amplia meu olhar e fortalece minha relação com a prática.</p>
        </div>
        <div data-reveal className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {credentials.map(({ icon: Icon, value, label }) => (
            <div key={value} className="text-center">
              <div className="size-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4"><Icon aria-hidden="true" className="size-6 text-primary-foreground" /></div>
              <div className="font-serif text-4xl md:text-5xl font-medium text-primary-foreground mb-2">{value}</div>
              <p className="text-sm text-primary-foreground/70">{label}</p>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {education.map((item, index) => (
            <div key={item.number} data-reveal style={{ animationDelay: index * 0.15 + "s" }} className="border-t border-primary-foreground/20 pt-8">
              <span className="text-sm font-medium text-primary-foreground/50 mb-4 block">{item.number}</span>
              <h3 className="font-serif text-2xl font-medium text-primary-foreground mb-4">{item.title}</h3>
              <p className="text-primary-foreground/75 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
