function Profile(props) {
  return (
    <>
      <div className="flex flex-col w-64 h-[294px] bg-[#202024] rounded-lg font-roboto mb-40">
        <div className="flex opacity-70">
          <img
            className="object-cover w-[256px] h-[72px] rounded-t-lg"
            src="/imagem_header.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <img
            className="flex h-[70px] w-[70px] rounded-md"
            src={props.image}
            alt=""
          />
          <p className="font-bold text-[#E1E1E6] text-base pt-3">
            {props.name}
          </p>
          <p className="text-sm font-normal text-[#8D8D99]">{props.office}</p>
        </div>
      </div>
    </>
  );
}

export default Profile;
