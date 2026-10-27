"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navigation, site } from "@/lib/site"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])
  return (
    <header className="fixed top-0 inset-x-0 z-50 p-4 md:p-6">
      <nav aria-label="Navegação principal" className="max-w-7xl mx-auto bg-background/90 backdrop-blur-md border border-border/50 rounded-3xl shadow-lg">
        <div className="flex items-center justify-between h-18 md:h-20 px-5 lg:px-8 gap-4">
          <Link href="#inicio" aria-label="Julya Caroline — início" className="flex flex-col shrink-0" onClick={() => setIsOpen(false)}>
            <span className="font-serif text-foreground text-xl lg:text-2xl font-normal leading-tight">Julya Caroline</span>
            <span className="text-[9px] tracking-[0.24em] uppercase text-muted-foreground mt-1">Biomedicina & estética</span>
          </Link>
          <div className="hidden lg:flex items-center gap-7 xl:gap-10">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{item.label}</Link>
            ))}
          </div>
          <div className="hidden lg:block">
            <Button asChild className="rounded-full px-6"><a href={site.instagram} target="_blank" rel="noopener noreferrer">Vamos conversar <ArrowUpRight data-icon="inline-end" /></a></Button>
          </div>
          <button type="button" className="lg:hidden p-2 text-foreground rounded-lg focus-visible:outline-2 focus-visible:outline-primary" onClick={() => setIsOpen((open) => !open)} aria-label={isOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isOpen} aria-controls="menu-mobile">
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        {isOpen ? (
          <div id="menu-mobile" className="lg:hidden py-6 px-6 border-t border-border/50">
            <div className="flex flex-col gap-5">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-lg text-muted-foreground hover:text-foreground transition-colors" onClick={() => setIsOpen(false)}>{item.label}</Link>
              ))}
              <Button asChild className="rounded-full mt-2"><a href={site.instagram} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Conversar pelo Instagram <ArrowUpRight data-icon="inline-end" /></a></Button>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  )
}
