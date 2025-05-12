import React from "react";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { marked } from "marked";

interface CardProps {
  title: string;
  description: string;
}

function parseMarkdown(markdown: string) {
  return { __html: marked(markdown) };
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  const typedTitle = useTypingEffect(title, 50, false);
  const typedDesc = useTypingEffect(description, 20, true);

  return (
    <div className="container flex flex-col w-80 text-azul-terminal justify-self-center mb-5 dark:text-verde-terminal dark:bg-black">
      <h2 className="text-xs">
        <code>{typedTitle}</code>
      </h2>
      <div className="box-border p-4 border-2">
        <p
          style={{ whiteSpace: "pre-wrap", maxWidth: "100%" }}
          className="text-xs text-justify"
          dangerouslySetInnerHTML={parseMarkdown(typedDesc)} // Usando dangerouslySetInnerHTML para injetar o HTML renderizado do Markdown
        />
      </div>
    </div>
  );
};

export default Card;
