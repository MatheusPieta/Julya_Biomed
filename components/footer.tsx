import Link from "next/link"
import { ArrowUpRight, Instagram, MapPin } from "lucide-react"
import { navigation, site } from "@/lib/site"

const procedures = ["Limpeza de pele", "Microagulhamento", "Peeling de diamante", "Eletroterapia", "Lash lifting", "Intradermoterapia Capilar"]

export function Footer() {
  return (
    <footer id="contato" className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <Link href="#inicio" className="inline-flex items-center gap-3 mb-6"><span className="size-9 rounded-full bg-background flex items-center justify-center text-foreground font-serif text-lg" aria-hidden="true">J</span><span className="font-serif text-2xl font-medium text-background">Julya Caroline</span></Link>
            <p className="text-background/70 leading-relaxed mb-6 max-w-sm">Biomedicina e estética com ciência, sensibilidade e atenção ao que faz você ser única.</p>
            <div className="flex flex-col gap-4 text-sm text-background/70">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-background transition-colors"><Instagram className="size-4" aria-hidden="true" />{site.instagramHandle}<ArrowUpRight className="size-3" aria-hidden="true" /></a>
              <p className="flex items-center gap-3"><MapPin className="size-4" aria-hidden="true" />{site.city}</p>
            </div>
          </div>
          <div><h3 className="font-medium text-background mb-4">Minha prática</h3><ul className="flex flex-col gap-3">{procedures.map((name) => (<li key={name}><Link href="#procedimentos" className="text-sm text-background/70 hover:text-background transition-colors">{name}</Link></li>))}</ul></div>
          <div><h3 className="font-medium text-background mb-4">Explore</h3><ul className="flex flex-col gap-3">{navigation.map((item) => (<li key={item.href}><Link href={item.href} className="text-sm text-background/70 hover:text-background transition-colors">{item.label}</Link></li>))}</ul></div>
          <div><h3 className="font-medium text-background mb-4">Vamos conversar?</h3><p className="text-sm text-background/70 leading-relaxed mb-5">Conheça mais sobre meu trabalho e tire suas dúvidas sobre o atendimento.</p><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex gap-2 items-center text-sm text-background underline underline-offset-4 decoration-background/30 hover:decoration-background">Falar pelo Instagram <ArrowUpRight className="size-4" aria-hidden="true" /></a></div>
        </div>
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-background/55">© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
          <p className="text-xs text-background/55">Biomédica · Técnica em estética · Pós-graduanda em Saúde Estética</p>
        </div>
      </div>
    </footer>
  )
}
