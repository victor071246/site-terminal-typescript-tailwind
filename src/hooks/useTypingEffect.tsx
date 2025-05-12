import { useState, useEffect } from "react";

export function useTypingEffect(
  text: string,
  speed: number = 50,
  loopDots = false
) {
  const [index, setIndex] = useState(0); // Índice controlado pelo React
  const [showCursor, setShowCursor] = useState(true);
  const [dots, setDots] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // Atualiza o texto conforme o índice
  const typedText = text.slice(0, index); // ← Sem risco de concatenar errado

  // Avança o índice até o final do texto
  useEffect(() => {
    if (index >= text.length) {
      setIsTyping(false);
      return;
    }

    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1); // ← Controla com estado, evitando race
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  // Cursor piscando
  useEffect(() => {
    if (!isTyping) {
      setShowCursor(false);
      return;
    }

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [isTyping]);

  // Pontos animados
  useEffect(() => {
    if (!loopDots || isTyping) return;

    const dotFrames = ["", ".", "..", "..."];
    let i = 0;

    const dotInterval = setInterval(() => {
      setDots(dotFrames[i]);
      i = (i + 1) % dotFrames.length;
    }, 400);

    return () => clearInterval(dotInterval);
  }, [loopDots, isTyping]);

  const cursor = showCursor ? "▌" : " ";

  return `${typedText}${cursor}${loopDots ? dots : ""}`;
}
