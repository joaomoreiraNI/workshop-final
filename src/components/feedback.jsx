function Feedback(props) {
  return (
    <>
      <div className="flex flex-col w-[832px] h-[564px] bg-[rgb(32,32,36)] rounded-lg p-10 mt-64">
        <div className="flex flex-row items-center gap-3">
          <img
            className="h-16 w-16 rounded-md"
            src={props.image}
            alt=""
          />
          <div className="flex-col">
            <p className="text-base font-bold text-[#E1E1E6] ">{props.name}</p>
            <p className="text-sm font-normal text-[#8D8D99]">{props.office}</p>
          </div>
        </div>
        <div className="flex flex-col text-[#C4C4CC] mt-6 gap-5">
          <p>{props.text}</p>
        </div>
        <div className="mt-16">
          <p className="text-base font-bold text-[#E1E1E6]">Deixe seu feedback</p>
          <div>
            Comentario top
          </div>
          <div>
            botao
          </div>
        </div>

      </div>
    </>
  );
}

export default Feedback;
