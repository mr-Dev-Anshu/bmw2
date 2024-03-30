import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";

const ConfirmBuy = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleClick = () => {
 
    if (!user.uid) {
      navigate("/login");
      
      return;
    }


    

    try {
    } catch (error) {}
  };

  return (
    <>
      {user ? (
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
      ) : (
        <div className="flex justify-center items-center h-screen text-xl text-blue-600 gap-4">
          <p className="text-4xl font-bold  text-red-400">
            Please Login first{" "}
          </p>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="bg-blue-500  py-2 px-4 text-black rounded "
          >
            Login{" "}
          </button>
        </div>
      )}
    </>
  );
};

export default ConfirmBuy;
