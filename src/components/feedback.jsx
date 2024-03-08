import { useNavigate } from "react-router-dom";
function Feedback(props) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col w-[832px] h-[564px] bg-[rgb(32,32,36)] rounded-lg p-10 mt-64 font-roboto">
        <div className="flex flex-row items-center gap-3">
          <img className="h-16 w-16 rounded-md" src={props.image} alt="" />
          <div className="flex-col">
            <p className="text-base font-bold text-[#E1E1E6] ">{props.name}</p>
            <p className="text-sm font-normal text-[#8D8D99]">{props.office}</p>
          </div>
        </div>
        <div className="flex flex-row text-[#C4C4CC] mt-6 gap-5">
          <p>
            {props.descricao}{" "}
            <a
              href="https://www.youtube.com/watch?v=g6M8oJq-dEA&ab_channel=spx"
              target="_blank"
            >
              clique aqui
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-14">
          <p className="text-base font-bold text-[#E1E1E6]">
            Deixe seu feedback
          </p>
          <div>
            <textarea
              placeholder="Digite aqui o seu texto..."
              name="message"
              id="message"
              cols="30"
              rows="10"
              className="flex w-full h-24 rounded-lg bg-[#121214] outline-none text-[#C4C4CC] resize-none	p-3 placeholder-gray-500 placeholder-opacity-25"
            ></textarea>
          </div>
          <div className="flex flex-row justify-between">
            <div
              // onClick={() => navigate("/")}
              className="w-28 h-12 flex flex-row mr-6 items-center hover:bg-red-900 bg-red-700 rounded-lg justify-center cursor-pointer mt-2"
            >
              <p className=" text-base font-bold text-white">
                {props.nameButton1}
              </p>
            </div>
            <div>
              <div
                onClick={() => navigate("/")}
                className="w-28 h-12 flex flex-row items-center hover:bg-red-900 bg-red-700 rounded-lg justify-center cursor-pointer mt-2"
              >
                <p className=" text-base font-bold text-white">
                  {props.nameButton2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
