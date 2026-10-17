"use client"

import { useEffect, useRef } from "react"

interface ScrollBlurTextProps { text: string; className?: string }

export function ScrollBlurText({ text, className = "" }: ScrollBlurTextProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    ref.current.classList.add("blur-pending")
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("blur-pending")
        entry.target.classList.add("blur-revealed")
        observer.disconnect()
      }
    }, { threshold: 0.25 })
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return <h2 ref={ref} className={className}>{text.split(" ").map((word, index) => (<span key={word + index} className="blur-word inline-block" style={{ transitionDelay: index * 70 + "ms" }}>{word}{"\u00A0"}</span>))}</h2>
}
