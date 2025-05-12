import "@fontsource/fira-code";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import { useTheme } from "./hooks/useTheme";
import { IoMoon } from "react-icons/io5";
import { GoSun } from "react-icons/go";

const myProjects = `<code>&nbsp;&nbsp;&nbsp;&nbsp;<strong>Site Portfólio PiteraBOX:</strong>

Site portfólio para a empresa PiteraBOX, com conteúdo renderizado dinamicamente com no MongoDB (Atlas), Crud completo e API feitas com base em JavaScript e no FrameWork Express. FrontEnd construído com HTML e CSS padrão com destaque para o design responsivo de celular.

<u>[[Projeto no GitHub]](https://github.com/victor071246/ProjetoIntegradorTestes/tree/main)</u>


<hr>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>Busca na API do GitHub:</strong>

Aplicação desenvolvida com ReactJS, com foco em componentes reutilizáveis e estilização modular. O projeto visa apresentar fluência na biblioteca React e conceitos modernos de desenvolvimento web.

<u>[[GitHub do Desafio React]](https://github.com/victor071246/desafio_react/tree/master)</u> 


<hr>

&nbsp;&nbsp;&nbsp;&nbsp;<strong>Site responsivo HTML/CSS:</strong>

Projeto desenvolvido como parte de um desafio de estágio, utilizando HTML5 e CSS3 puros com um pouco de JavaScript. largura de celular com 390px e computador com 1920px, como sugeria a especificação do Figma.

<u>[[GitHub do Desafio Estágio]](https://github.com/victor071246/View_Desafio_Estagio_CSS_HTML/tree/main)</u>

<hr>

&nbsp;&nbsp;&nbsp;&nbsp;**Este Projeto:**

Portfólio desenvolvido com TypeScript, React e TailWindCSS. Foi criado um hook personalizado que faz tanto a digitação dos itens, sua velocidade de digitação, animação de cursor e três pontos no final do texto. Também foi construído um hook que alterna o tema entre claro e escuro<code>`;

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      <div className="bg-white h-full dark:bg-black transition-all duration-500 ease-in-out">
        <button
          onClick={toggleTheme}
          className="absolute top-2 right-2 p-2 border-none flex flex-row"
        >
          {isDark ? (
            <code className="flex flex-row items-center gap-2 text-sm text-verde-terminal">
              <GoSun></GoSun> Claro
            </code>
          ) : (
            <code className="flex flex-row items-center gap-2 text-sm text-azul-terminal">
              <IoMoon></IoMoon> Escuro
            </code>
          )}
        </button>
        <Header
          title=" Desenvolvedor Web"
          description="   JavaScript   |   React   |   NodeJS   |   FullStack "
        ></Header>
        <Card title=" Teste" description={myProjects}></Card>
        <Card
          title=" Teste"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas similique consequatur asperiores, perspiciatis tenetur porro, atque unde eius voluptate velit nostrum, autem iure totam reiciendis quis nihil harum illo debitis"
        ></Card>
      </div>
    </>
  );
}

export default App;
