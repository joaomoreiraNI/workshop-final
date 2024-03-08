import Feedback from "../components/feedback";
import Header from "../components/header";

export default function Juliana() {
  return (
    <>
      <Header />
      <div className="bg-[#3b3a3a] h-screen">
        <div className="h-full flex justify-center items-center">
          <div className="mb-32">
            <Feedback
              name="Juliana"
              office="Pagodeira"
              image="https://github.com/JuCabralNI.png"
              descricao="Sou apaixonada pelo ritmo contagiante do pagode, que me faz dançar até o chão! Na cozinha, busco uma alimentação saudável, com foco em ingredientes frescos e nutritivos. Treinar na academia é meu ritual para manter o corpo e a mente em sintonia, sempre buscando novos desafios. No trabalho, dedico-me com entusiasmo, buscando superar minhas expectativas e contribuir para o sucesso da equipe."
              nameButton1="Publicar"
              nameButton2="Voltar"
            ></Feedback>
          </div>
        </div>
      </div>
    </>
  );
}
