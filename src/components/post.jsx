import { useNavigate } from "react-router-dom";
function Post(props) {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex w-[832px] h-[123px] bg-[#202024] rounded-lg justify-between items-center">
        <div className="flex flex-row ml-11 items-center gap-4">
          <img
            className="h-16 w-16 rounded-md"
            src={props.image}
            alt=""
          />
          <div className="flex-col">
            <p className="font-bold text-[#E1E1E6] text-base">{props.name}</p>
            <p className="text-sm font-normal text-[#8D8D99]">
              {props.office}
            </p>
          </div>
        </div>
        <div onClick={() => navigate(`${props.name.toLowerCase()}`)} className="w-44 h-12 flex flex-row mr-6 items-center hover:bg-red-900 bg-red-700 rounded-lg justify-center cursor-pointer">
          <p className="font-bold text-white" >{props.nameButton}</p>
        </div>
      </div>
    </>
  );
}

export default Post;
