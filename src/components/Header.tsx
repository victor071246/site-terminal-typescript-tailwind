import React from "react";
import foto from "../assets/foto.png";
import { useTypingEffect } from "../hooks/useTypingEffect";

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  const typedTitle = useTypingEffect(title, 50, true);
  const typedDesc = useTypingEffect(description, 30, false);

  return (
    <header className="bg-white text-azul-terminal p-8 box-border w-full dark:text-verde-terminal dark:bg-black">
      <div className="container flex flex-col items-center justify-center text-center gap-7">
        <h1 className=" w-full text-left">
          <code>{typedTitle}</code>
        </h1>
        <img src={foto}></img>
        {/* prettier-ignore */}
        <h2 className="text-xs w-full text-center"><code>{typedDesc}</code>
        </h2>
      </div>
    </header>
  );
};

export default Header;
