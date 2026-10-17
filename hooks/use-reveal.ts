"use client"

import { useEffect, useRef } from "react"

export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    const elements = ref.current?.querySelectorAll<HTMLElement>("[data-reveal]")
    if (!elements || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.remove("reveal-pending")
        entry.target.classList.add("animate-fade-up")
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.08 })
    elements.forEach((element) => {
      element.classList.add("reveal-pending")
      observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])
  return ref
}
