import { useNavigate } from "react-router-dom";

const ConfirmBuy = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/message");
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-[#aeaeae]">
      <div className="h-[300px] w-[300px] flex flex-col justify-center items-center p-3 rounded-xl bg-white">
        <p className="text-4xl font-bold ">Rs : 500</p>
        <p className="text-center mt-8 font-bold text-green-700 ">
          This Amount will be deducted from your balance
        </p>
        <p className="mt-8">
          <button
            onClick={handleClick}
            className="text-xl bg-blue-700 px-24 text-white font-semibold py-2  rounded-xl"
          >
            Confirm
          </button>
        </p>
      </div>
    </div>
  );
};

export default ConfirmBuy;
