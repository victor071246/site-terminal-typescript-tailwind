import React from "react";
import foto from "../assets/foto_225px.png";
import { useTypingEffect } from "../hooks/useTypingEffect";

interface HeaderProps {
  title: string;
  description: string;
}

const Header: React.FC<HeaderProps> = ({ title, description }) => {
  const typedTitle = useTypingEffect(title, 50, true);
  const typedDesc = useTypingEffect(description, 30, false);

  return (
    <header className="bg-white text-azul-terminal p-8 box-border w-full dark:text-verde-terminal dark:bg-black [@media(min-width:1600px)]:flex-row">
      <div className="container flex flex-col items-center justify-center text-center gap-7 [@media(min-width:1800px)]:ml-30   [@media(min-width:1800px)]:mt-25">
        <h1 className=" w-full text-left  [@media(min-width:1600px)]:text-5xl [@media(min-width:1600px)]:text-left [@media(min-width:1600px)]:ml-250 [@media(min-width:1600px)]:tracking-wider ">
          <code>{typedTitle}</code>
        </h1>
        <img
          src={foto}
          className="w-40 h-40 [@media(min-width:1600px)]:w-[220px] [@media(min-width:1600px)]:h-[220px]  [@media(min-width:1600px)]:left-50
          [@media(min-width:1600px)]:top-5  [@media(min-width:1600px)]:absolute [@media(min-width:1800px)]:left-80 [@media(min-width:1800px)]:top-25 rounded-full"
        ></img>
        {/* prettier-ignore */}
        <h2 className="text-xs w-full text-center [@media(min-width:1800px)]:mb-10 [@media(min-width:1600px)]:text-2xl [@media(min-width:1600px)]:text-left [@media(min-width:1600px)]:ml-250 [@media(min-width:1600px)]:mt-15 [@media(min-width:1600px)]:mb-10 [@media(min-width:1600px)]:tracking-wider [@media(min-width:1800px)]:ml-280"><code>{typedDesc}</code>
        </h2>
      </div>
    </header>
  );
};

export default Header;
