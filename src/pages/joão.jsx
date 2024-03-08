import Feedback from "../components/feedback";
import Header from "../components/header";

export default function João() {
  return (
    <>
      <Header />
      <div className="bg-[#3b3a3a] h-screen">
        <div className="h-full flex justify-center items-center">
          <div className="mb-32">
            <Feedback
              name="João"
              office="Garoto de programa"
              image="https://github.com/joaomoreiraNI.png"
              descricao="Não diga nada, apenas"
              nameButton1="Publicar"
              nameButton2="Voltar"
            ></Feedback>
          </div>
        </div>
      </div>
    </>
  );
}
