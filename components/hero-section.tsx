"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AnimatedText } from "@/components/animated-text"
import { useReveal } from "@/hooks/use-reveal"
import { site } from "@/lib/site"

export function HeroSection() {
  const sectionRef = useReveal()
  const imageContainerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let frame = 0
    const update = () => {
      if (!sectionRef.current || !imageContainerRef.current) return
      const progress = Math.min(window.scrollY / (sectionRef.current.offsetHeight * 0.5), 1)
      imageContainerRef.current.style.transform = "scale(" + (1 - progress * 0.05) + ")"
      imageContainerRef.current.style.borderRadius = progress * 24 + "px"
      frame = 0
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    window.addEventListener("scroll", onScroll, { passive: true })
    update()
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(frame) }
  }, [sectionRef])
  return (
    <section ref={sectionRef} id="inicio" className="relative min-h-svh flex items-center overflow-hidden pt-24 bg-foreground">
      <div ref={imageContainerRef} className="absolute inset-0 overflow-hidden transition-transform duration-100">
        <div className="absolute inset-0 lg:left-[35%]">
          <Image src="/images/julya/julya-caroline.webp" alt="Retrato de Julya Caroline Ferreira, biomédica" fill priority sizes="(min-width: 1024px) 65vw, 100vw" className="object-cover object-[center_26%] lg:object-[center_30%] animate-zoom-in" />
        </div>
        <div className="absolute inset-0 hero-shade" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 w-full">
        <div className="max-w-2xl lg:max-w-[58%]">
          <p data-reveal className="text-xs sm:text-sm uppercase tracking-[0.2em] text-background/90 font-medium mb-6">Julya Caroline Ferreira</p>
          <h1 className="font-serif text-[clamp(2.7rem,5.4vw,5.5rem)] font-medium leading-[1.1] text-background text-balance mb-8">
            <AnimatedText text="Sua beleza," delay={0.15} /><br />
            <span className="text-accent"><AnimatedText text="com ciência" delay={0.4} /><br /><AnimatedText text="e cuidado." delay={0.65} /></span>
          </h1>
          <p data-reveal className="text-base md:text-lg text-background/85 leading-relaxed mb-10 max-w-lg">Biomédica pela FURB, técnica em estética e pós-graduanda em Saúde Estética pelo IOA. Um olhar atento à sua individualidade, do conhecimento à prática.</p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <Button asChild size="lg" className="rounded-full px-8 h-12 group"><Link href="#procedimentos">Conheça meu trabalho <ArrowRight data-icon="inline-end" className="group-hover:translate-x-1 transition-transform" /></Link></Button>
            <Button asChild size="lg" variant="outline" className="hero-outline rounded-full px-8 h-12"><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">Vamos conversar</a></Button>
          </div>
          <p className="text-xs text-background/60 mt-10 tracking-wide">Estética facial e corporal · {site.city}</p>
        </div>
      </div>
    </section>
  )
}
