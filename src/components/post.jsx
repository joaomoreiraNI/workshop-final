function Post(props) {
  return (
    <>
      <div className="flex w-[832px] h-[123px] bg-[#202024] rounded-lg justify-between items-center">
        <div className="flex flex-row ml-11 items-center gap-4">
          <img
            className="h-16 w-16 rounded-md"
            src="https://github.com/joaomoreiraNI.png"
            alt=""
          />
          <div className="flex-col">
            <p className="font-bold text-[#E1E1E6] text-base">{props.name}</p>
            <p className="text-sm font-normal text-[#8D8D99]">
              {props.office}
            </p>
          </div>
        </div>
        <div className="w-44 h-12 flex flex-row mr-6 items-center bg-[#00485F] rounded-lg justify-center">
          <p className="font-bold text-white">{props.nameButton}</p>
        </div>
      </div>
    </>
  );
}

export default Post;
