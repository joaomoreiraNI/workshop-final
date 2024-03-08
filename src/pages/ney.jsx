import Feedback from "../components/feedback";
import Header from "../components/header";

export default function Ney() {
  return (
    <>
      <Header />
      <div className="bg-[#3b3a3a] h-screen">
        <div className="h-full flex justify-center items-center">
          <div className="mb-32">
            <Feedback
              name="Ney"
              office="Jogador de futebol"
              image="https://github.com/lucasoliveira01.png"
              descricao="Sou um cara apaixonado por compartilhar conhecimento! Adoro ensinar e ajudar as pessoas a aprenderem e crescerem. Na academia, me dedico a treinar com disciplina e foco, buscando sempre superar meus limites. No dia a dia, não deixo de lado o bom humor e estou sempre pronto para arrancar risadas de quem está ao meu redor. Na área profissional, sou especialista em desenvolvimento fullstack e me dedico a criar soluções inovadoras e eficientes. E quando o assunto é futebol, sou fanático pelo meu time e choro com cada jogada!"
              nameButton1="Publicar"
              nameButton2="Voltar"
            ></Feedback>
          </div>
        </div>
      </div>
    </>
  );
}
