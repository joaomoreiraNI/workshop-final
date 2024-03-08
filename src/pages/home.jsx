import Profile from "../components/profile";
import Post from "../components/post";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-[#3b3a3a] h-screen">
        <div className="h-full flex justify-center items-center gap-14">
          <div className="mb-32">
            <Profile
              name="João"
              office="Garoto de programa"
              image="https://github.com/joaomoreiraNI.png"
            ></Profile>
          </div>
          <div className="flex flex-col gap-8">
            <Post
              name="Juliana"
              office="Pagodeira"
              image="https://github.com/JuCabralNI.png"
              nameButton="Ir para publicação"
            ></Post>
            <Post
              name="Miguelito"
              office="Engenheiro de comPUTAção"
              image="https://github.com/MiguelLahrAgger.png"
              nameButton="Ir para publicação"
            ></Post>
            <Post
              name="Ney"
              office="Jogador de futebol"
              image="https://github.com/lucasoliveira01.png"
              nameButton="Ir para publicação"
            ></Post>
            <Post
              name="João"
              office="Garoto de programa"
              image="https://github.com/joaomoreiraNI.png"
              nameButton="Ir para publicação"
            ></Post>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
