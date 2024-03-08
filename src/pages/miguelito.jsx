import Feedback from "../components/feedback";
import Header from "../components/header";

export default function Miguelito() {
  return (
    <>
      <Header />
      <div className="bg-[#3b3a3a] h-screen">
        <div className="h-full flex justify-center items-center">
          <div className="mb-32">
            <Feedback
              name="Miguelito"
              office="Engenheiro de comPUTAção"
              image="https://github.com/MiguelLahrAgger.png"
              descricao="O ritmo me move! Adoro dançar, seja qual for o estilo, e me jogo na pista com entusiasmo. No meu dia a dia, não abro mão de uma boa dose de humor e sou especialista em arrancar risadas de quem está ao meu redor. Na área profissional, sou apaixonado por front-end e me dedico a criar interfaces intuitivas e atraentes. Acredito na força da parceria e busco sempre colaborar com meus colegas para alcançarmos objetivos em conjunto."
              nameButton1="Publicar"
              nameButton2="Voltar"
            ></Feedback>
          </div>
        </div>
      </div>
    </>
  );
}
