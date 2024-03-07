import Feedback from "../components/feedback";
import Header from "../components/header";

export default function Juliana() {
    return <>
        <Header />
        <div className="bg-[#3b3a3a] h-screen">
            <div className="h-full flex justify-center items-center">
                <div className="mb-32">
                    <Feedback name="João Moreira" office="Garoto de programa" image="https://github.com/joaomoreiraNI.png" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus elementum sagittis vitae et leo. 
                    Convallis a cras semper auctor neque vitae tempus quam pellentesque. 
                    Ac turpis egestas maecenas pharetra convallis posuere morbi."></Feedback>
                </div>
            </div>
        </div>
    </>
}
