import { CircleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <CircleLoader size={40} />
    </div>
  );
};

export default Loading;
