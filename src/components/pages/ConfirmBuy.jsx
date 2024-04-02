import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase.config";
import { useState } from "react";
const ConfirmBuy = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  let { price } = useParams();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(price);
  const handleClick = async () => {
    setLoading(true);
    try {
      if (!user.uid) {
        navigate("/login");
        return;
      }

      const q = query(
        collection(db, "Users_Profile"),
        where("phoneNumber", "==", user?.phoneNumber)
      );

      const dataSnap = await getDocs(q);
      let UserAmount = 0;
      dataSnap.forEach((doc) => {
        console.log(doc.data());
        UserAmount = doc.data().amount;
      });

      console.log(UserAmount);
      price = price - 0;

      if (UserAmount < price) {
        setLoading(false);
        setMessage("Insufficient Balance ");
        return;
      }

      dataSnap.forEach(async (doc) => {
        await updateDoc(doc.ref, {
          amount: UserAmount - price,
        });
      });

      setLoading(false);
      navigate("/successbuy");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {user ? (
        <div className="min-h-screen w-full flex justify-center items-center bg-[#aeaeae]">
          <div className="h-[300px] w-[300px] flex flex-col justify-center items-center p-3 rounded-xl bg-white">
            <p className="text-4xl font-bold ">Rs : {price}</p>
            <p className="text-center mt-8 font-bold text-green-700 ">
              This Amount will be deducted from your balance
            </p>
            <p className="mt-8">
              <button
                onClick={handleClick}
                className="text-xl bg-blue-700 px-24 text-white font-semibold py-2  rounded-xl"
              >
                 {loading ? "Loading..." : "Confirm"}
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
           Login
          </button>
          <div>{message}</div>
        </div>
      )}
    </>
  );
};

export default ConfirmBuy;
