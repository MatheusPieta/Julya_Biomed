interface AnimatedTextProps { text: string; delay?: number }

export function AnimatedText({ text, delay = 0 }: AnimatedTextProps) {
  const words = text.split(" ")
  return (
    <span aria-label={text}>
      {words.map((word, index) => (
        <span key={word + index} aria-hidden="true" className="inline-block animate-fade-up" style={{ animationDelay: delay + index * 0.09 + "s", animationFillMode: "both" }}>{word}{index < words.length - 1 ? "\u00A0" : ""}</span>
      ))}
    </span>
  )
}
